#include "sensor_temp.h"
#include <OneWire.h>
#include <DallasTemperature.h>

const int oneWireBus = 11;

OneWire oneWire(oneWireBus);

DallasTemperature sensors(&oneWire);

void startTemperature() {
    sensors.begin();
}

float readTemperature() {
    sensors.requestTemperatures();
    float celsius = sensors.getTempCByIndex(0); 

    return celsius;
}