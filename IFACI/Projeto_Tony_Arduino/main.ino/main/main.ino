#include "sensor_temp.h"
#include "sirene.h"

const int LED_GREEN_PIN = 5;
const int LED_RED_PIN = 6;
const int POTENTIOMETER_PIN = A0;

int count = 0;
int buttonState = 0;
int temp = 0;
int potValue = 0;

void setup() {
  Serial.begin(9600);
  startTemperature();
  pinMode(LED_GREEN_PIN, OUTPUT);
  pinMode(LED_RED_PIN, OUTPUT);
  pinMode(POTENTIOMETER_PIN, INPUT);
  pinMode(12, OUTPUT);
}

void loop() {
  if(Serial.available() > 0){
    buttonState = Serial.parseInt();
  }
  if(buttonState == 1){
    sendSensorData();
    digitalWrite(LED_GREEN_PIN, HIGH);
    digitalWrite(LED_RED_PIN, LOW);
  } 
  if(buttonState == 0) {
    digitalWrite(LED_GREEN_PIN, LOW);
    digitalWrite(LED_RED_PIN, HIGH);
  }
  delay(1500);
}

void sendSensorData() {
  potValue = analogRead(POTENTIOMETER_PIN);
  temp = readTemperature();

  if(potValue >= 500){
    startSirene();
  } 
  if(potValue == 200) {
    stopSirene();
  }
  limparSerial();
  Serial.println(String(potValue) + "," + String(temp));
  
}

void limparSerial() {
  while (Serial.available()) {
    Serial.read();
  }
}
