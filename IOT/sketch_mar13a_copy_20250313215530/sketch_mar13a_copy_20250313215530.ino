#include <ESP8266WiFi.h>           // Biblioteca para gerenciar a conexão Wi-Fi no ESP8266
#include <ESP8266HTTPClient.h>      // Biblioteca para realizar requisições HTTP no ESP8266
#include <DallasTemperature.h>
#include <OneWire.h>

// Credenciais da rede Wi-Fi
const char* ssid = "linksys";      // Nome (SSID) da rede Wi-Fi
const char* password = "";         // Senha da rede Wi-Fi (em redes abertas, deixe vazio)

// Definindo o pino de dados do DS18B20
#define ONE_WIRE_BUS D8            // Pino D8 no ESP8266

OneWire oneWire(ONE_WIRE_BUS);     // Instanciando a comunicação OneWire
DallasTemperature sensors(&oneWire); // Instanciando o objeto DallasTemperature para lidar com os sensores

// Sua chave de escrita do ThingSpeak (deve ser gerada em sua conta ThingSpeak)
const char* apikey = "5PEPG6HXN1780M27";

void setup() {
  // Inicializa o pino do LED embutido como saída
  pinMode(LED_BUILTIN, OUTPUT);

  // Inicializa a comunicação serial com velocidade de 115200 bps
  Serial.begin(9600);

  // Inicia a conexão com a rede Wi-Fi usando as credenciais fornecidas
  WiFi.begin(ssid, password);

  Serial.println("Conectando ao Wi-Fi...");

  // Aguarda até que a conexão com o Wi-Fi seja estabelecida
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000); // Espera 1 segundo antes de verificar novamente
    Serial.print("."); // Imprime um ponto na saída serial a cada tentativa
  }

  // Quando conectado, imprime a mensagem de sucesso
  Serial.println("\nWi-Fi conectado!");

  // Inicializa o sensor DS18B20
  sensors.begin();
}

void loop() {
  // Verifica se o dispositivo ainda está conectado ao Wi-Fi
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;        // Cria um objeto WiFiClient necessário para conexões HTTP no ESP8266
    HTTPClient http;          // Cria um objeto HTTPClient para enviar requisições HTTP

    // Solicita a leitura de temperatura dos sensores
    sensors.requestTemperatures();
    float temperatura = sensors.getTempCByIndex(0); // Lê a temperatura 

    // Monta a URL para enviar dados ao ThingSpeak
    String url = "http://api.thingspeak.com/update?api_key=";
    url += apikey;                    // Adiciona a chave de API à URL
    url += "&field1=" + String(temperatura); // Adiciona o valor de temperatura ao campo "field1"

    // Imprime a URL gerada no monitor serial (útil para depuração)
    Serial.println("Enviando: " + url);
    Serial.println("Temperatura: " + String(temperatura));

    // Inicia a requisição HTTP usando o objeto "client" e a URL gerada
    http.begin(client, url);

    // Executa a requisição HTTP GET e armazena o código de resposta
    int httpResponseCode = http.GET();

    // Verifica se a requisição foi bem-sucedida (código 200 indica sucesso)
    if (httpResponseCode > 0) {
      Serial.println("Resposta do servidor: " + String(httpResponseCode));
    } else {
      // Em caso de erro, imprime a mensagem correspondente
      Serial.println("Erro ao enviar: " + http.errorToString(httpResponseCode));
    }

    // Finaliza a conexão HTTP (libera recursos)
    http.end();
  }

  // Pisca o LED embutido (indica que o loop está rodando)
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);

  // Aguarda 15 segundos antes de enviar novamente (limitação do plano gratuito do ThingSpeak)
  delay(15000); // Tempo de espera de 15 segundos entre cada envio de dados
}
