
#include "DHT.h"
 
#define DHTPIN A1 // pino que estamos conectado
#define DHTTYPE DHT11 // DHT 11
DHT dht(DHTPIN, DHTTYPE);

const int LED_GREEN_PIN = 5;
const int LED_RED_PIN = 6;
const int POTENTIOMETER_PIN = A0;

int count = 0;
int buttonState = 0;
int temp = 0;
int potValue = 0;

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(LED_RED_PIN, OUTPUT);
  pinMode(POTENTIOMETER_PIN, INPUT);
}

void loop() {
  if(Serial.available() > 0){
    buttonState = Serial.parseInt();
  }
  if(buttonState == 1){
    sendSensorData();
    digitalWrite(LED_GREEN_PIN, HIGH);
  } 
  if(buttonState == 0) {
    digitalWrite(LED_GREEN_PIN, LOW);
  }
  delay(1500);
}

void sendSensorData() {
  potValue = analogRead(POTENTIOMETER_PIN);
  temp = dht.readTemperature();
  limparSerial();
  Serial.println(String(potValue) + "," + String(temp));
  
}

void limparSerial() {
  while (Serial.available()) {
    Serial.read();
  }
}
