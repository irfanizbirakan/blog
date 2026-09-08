---
title: "Otomatik Play Pause"
subtitle: "Atölyedeki gürültülü cihazlar çalıştığında videoyu otomatik durduran sese duyarlı sistem"
date: 2025-10-08
tags: ["arduino", "diy", "proje", "elektronik", "servo"]
category: "Kendin Yap"
description: "Arduino ve mikrofon sensörü kullanarak, ortamdaki sese duyarlı otomatik play/pause yapan cihaz projesi ve gerekli kodlar."
heroImage: "/img/otomatik-play-pause-kapak.jpg"
---

<div align="center">
  <iframe 
    width="315" 
    height="560" 
    src="https://www.youtube.com/embed/esQQg4ABVhg" 
    title="YouTube Shorts" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

Bu videoda sese duyarlı, oynatılan videoyu durdurup tekrar oynatabilen bir cihaz yaptık. Cihazın temel mantığı atölyedeki gürültülü bir cihaz çalıştırıldığında bluetooth ses sistemimizin butonuna basarak videoyu kontrol etmesini sağlamak. Videodaki gibi bir bluetooth cihazınız yoksa klavyenizin multimedya tuşunu da kullanabilirsiniz. Unutmayın ki bu yalnızca bir örnek, kodu eğip bükerek, farklı sensörler ekleyip çıkararak bambaşka projeler de yapabilirsiniz.

## 1. Kullanılan Ürünler

*   <a href="https://www.robo90.com/arduino-uno-r3-smd-klonch340-cipli-usb-kablo-hediyeli" target="_blank">Arduino UNO R3 – SMD Klon (CH340 Çipli)</a>
*   <a href="https://www.robo90.com/ses-sensor-karti-mikrofon-sensoru-3-pinli" target="_blank">Ses Sensör Kartı – Mikrofon Sensörü (3 Pinli)</a>
*   <a href="https://www.robo90.com/tower-pro-sg90-mini-servo-motor-9g" target="_blank">Tower Pro SG90 Mini Servo Motor – 9g</a>

<br/>
<img src="https://robo90.com/Data/EditorFiles/tasarim/robo90-logo.svg" alt="Robo90 Logo" width="300" />

---

## 2. Bağlantı Şeması

En ucuz ve en çok kullanılan servo motorlar olan sg90’ların kabloları genellikle standarttır. Aşağıdaki tablolara göre Arduino bağlantılarınızı gerçekleştirebilirsiniz:

### Servo Motor Bağlantısı
| SG90 Kablo Rengi | Arduino Pini |
| :--- | :--- |
| Kahverengi | Herhangi bir GND |
| Kırmızı | Herhangi bir 5V |
| Sarı | 9 |

### Mikrofon Sensörü Bağlantısı
| Sensör Pini | Arduino Pini |
| :--- | :--- |
| VIN | Herhangi bir 5V |
| GND | Herhangi bir GND |
| VOUT (OUT) | 2 |

---

## 3. Arduino Kodu

Aşağıdaki kodu kopyalayarak Arduino IDE üzerinden kartınıza yükleyebilirsiniz.

```cpp
// Otomatik Play/Pause Projesi
// 07/10/2025, İrfan İzbırakan

#include <Servo.h>
Servo myservo;

const int inputPin = 2;          // Mikrofon giriş pini
unsigned long interval = 100;    // Ölçüm aralığı (ms) - ihtiyaca göre değiştir
unsigned long previousMillis = 0;
int pulseCount = 0;
int lastState = LOW;

int pulseThreshold = 45;         // Eşik değer
int runningCount = 15;
int stopCount = 20;
int aboveCount = 0;              // Üst üste eşik üstü sayaç
int belowCount = 0;              // Üst üste eşik altı sayaç
bool isMachineRunning = false;   // Makine durumu

void setup() {
  myservo.attach(9);             // Servonun bağlanacağı pin
  pinMode(inputPin, INPUT);
  pinMode(12, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Giriş pinini oku
  int currentState = digitalRead(inputPin);

  myservo.write(0);              // nolur nolmaz başlangıçta servoyu sıfıra çekiyoruz.

  // LOW -> HIGH geçişini say
  if (currentState == HIGH && lastState == LOW) {
    pulseCount++;
  }
  lastState = currentState;

  // Zaman kontrolü
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    //Serial.print(interval);                              // Bu kısım seri monitör ve seri plotter ile test için. Şu an pasif // , /* , */  karakterlerini kaldırırsanız aktifleşir.
    //Serial.print(" ms içinde HIGH pulse sayısı: ");
    /*Serial.print(0);
    Serial.print(" ");
    Serial.print(200);
    Serial.print(" "); */
    //Serial.println(pulseCount);
    
    // Makine çalışma/durma kontrolü
    if (pulseCount > pulseThreshold) {
      aboveCount++;
      belowCount = 0;  // sıfırla
      if (aboveCount >= runningCount && !isMachineRunning) {
        isMachineRunning = true;
        Serial.println(" ");
        Serial.println("Makine Çalışıyor");
        Serial.println(" ");
        digitalWrite(12, HIGH);

        myservo.write(0);
        delay(100);
        myservo.write(18);        
        delay(200);
        myservo.write(0);
        delay(200);
      }
    } else {
      belowCount++;
      aboveCount = 0;  // sıfırla
      if (belowCount >= stopCount && isMachineRunning) {
        isMachineRunning = false;
        Serial.println(" ");
        Serial.println("Makine Durdu");
        Serial.println(" ");
        digitalWrite(12, LOW);

        myservo.write(0);
        delay(100);
        myservo.write(18);
        delay(200);
        myservo.write(0);
        delay(200);
      }
    }

    // Sayaç ve zaman sıfırlama
    pulseCount = 0;
    previousMillis = currentMillis;
  }
}