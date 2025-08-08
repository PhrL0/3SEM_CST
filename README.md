#include <Wire.h>
#include "HT_SSD1306Wire.h"
SSD1306Wire  factory_display(0x3c, 500000, SDA_OLED, SCL_OLED, GEOMETRY_128_64, RST_OLED); // addr , freq , i2c group , resolution , rst

void VextON(void)
{
  pinMode(Vext,OUTPUT);
  digitalWrite(Vext, LOW);
}

void VextOFF(void) //Vext default OFF
{
  pinMode(Vext,OUTPUT);
  digitalWrite(Vext, HIGH);
}

const unsigned char heart_bitmap [] PROGMEM = {
  0b00110000 ,0b00001100,
  0b01111000 ,0b00011110,
  0b11111100 ,0b00111111,
  0b11111110, 0b01111111,
  0b11111110, 0b01111111,
  0b11111110 ,0b01111111,
  0b11111100 ,0b00111111,
  0b11111000 ,0b00011111,
  0b11110000 ,0b00001111,
  0b11100000 ,0b00000111,
  0b11000000 ,0b00000011,
  0b10000000 ,0b00000001,
  0b00000000 ,0b00000000,
  0b00000000 ,0b00000000,
  0b00000000 ,0b00000000,
  0b00000000 ,0b00000000
};

void setup() {
  Serial.begin(115200);
	VextON();
	delay(100);
	factory_display.init();
  factory_display.clear();
  factory_display.setFont(ArialMT_Plain_10);
  factory_display.drawXbm(0, 0, 16, 16, heart_bitmap);
  factory_display.drawString(16, 0, "Sparks -");
  factory_display.drawXbm(16, 16, 16, 16, heart_bitmap);
  factory_display.drawString(36, 16, "Coldplay");
  factory_display.drawString(50, 32, "00:54");
  factory_display.drawXbm(32, 32, 16, 16, heart_bitmap);
  factory_display.drawString(68, 48, "01:12");
  factory_display.drawXbm(48, 48, 16, 16, heart_bitmap);
  factory_display.display();
}

void loop() {
}
