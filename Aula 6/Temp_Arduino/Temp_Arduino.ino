//Serial-temperatura

int SENSOR = 0;
float D = 0;
int T = 0;

  void setup(){
    Serial.begin(9600);
  }

    void loop(){
      D = analogRead(SENSOR);
      T = (D * 5 * 100)/1023;  
      Serial.print(T);  
      delay(1000);
    }

      int main(void)
      {
        init();
        setup();   
        for (;;)
        loop();
              
        return 0;
}



