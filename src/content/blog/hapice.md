---
title: "Hapiçe – Otomatik İlaç Makinesi"
subtitle: "İlaçlarını almayı unutanlar için bir 'Hatırlatıcı Cihaz' tasarlıyoruz."
date: 2026-09-01
tags: ["esp32", "elektronik", "3d-baski", "arduino", "diy"]
category: "Kendin Yap"
description: "İlaçları düzenli kullanmayı kolaylaştıran, ESP32 tabanlı otomatik ilaç dispenseri Hapiçe'nin adım adım yapım rehberi ve kodları."
heroImage: "/img/hapice-kapak.jpg"
---
<div align="center">
  <iframe 
    width="315" 
    height="560" 
    src="https://www.youtube.com/embed/XKJrU0vKnCA" 
    title="YouTube Shorts" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>


Merhabalar. İlaçları düzenli kullanmak önemli elbette. Bazı hastalıklar için ilaçları tam saatinde almak çok daha önemli olabiliyor. Biz de ilacını almayı unutanlar için bir cihaz tasarladık. Aslına bakarsanız bir şey deniyorum. Bildiğiniz gibi tüketici elektroniği ürünleri çok genel bir işlev sunuyor. Kendi ihtiyaçlarımız için kendi cihazlarımızı yaptığımızda ise hiçbir markanın sunamayacağı esneklikte bir makine elde ediyoruz. 

Yaptığımız cihaza istediğimiz özelliği ekleyip istemediğimizi çıkarabiliyoruz ve bunu yapmak sandığınızdan daha kolay ve eğlenceli. Benim amacımsa bu bilmediğiniz dünyanın kapılarını arayıp lezzetini tatmanızı sağlamak. Kendi ellerinizle bir şey inşaa ettiğinizde ve bir kahve alıp tıkır tıkır çalışmasını izlediğinizde oluşacak tatmin hissini çok daha fazla kişiye deneyimletmeyi hedefliyorum.

Hapiçe büyük bir projenin ilk denemesidir. Bunun gibi pek çok eğlenceli cihaz tasarlayıp tüm kaynakları herkesin yapabilmesi için ücretsiz paylaşmayı hedefliyorum. Ayrıca hiç bilmeyenler veya 3D baskı imkanı olmayanlar için proje için gereken baskılar, kablolar, kartlar kısacası aklınıza gelen her şeyi tek bir kutu halinde satın alabileceğiniz bir sistem üzerinde çalışıyoruz. 

> **Not:** Tamamlandığında bu paragrafı güncelleyeceğim, paket haline getirme çalışmaları devam ediyor! (edit: geciktiğini biliyorum, şu sıralar bir tadılatın içindeyim ve ortalık per perişan, lütfen idare edin. 🥲)

“A’dan Z’ye başkasının tasarladığı bir projenin bana ne faydası var” diye düşünenlerdenseniz yanılıyor olabilirsiniz. Her ne kadar kapsamlı bir rehber sunsam da mutlaka projeyi yaparken sorunlarla karşılaşacaksınız. Belki bilgisayarınız mikrodenetleyiciyi tanımayacak, belki saatlerce yanlış bağladığınız bir kabloyu arayacaksınız. İlk bakışta bu durum olumsuz gibi görünse de aslında mantığı kavramanızın en pratik ve öğretici yolu bu. Artık sorunları çözmek için güzel bir araca sahipsiniz: AI. Bu özellikle elektronik öğrenmeye çalışanlar için büyük bir lüks.

Neyse, daha fazlasını videolarda konuşuruz. Hadi şu cihazın yapımına geçelim. 

---

## 1. Kullanılan Ürünler ve Parçalar

İlk olarak şu parçaları edinmeniz gerekiyor. Alttaki liste ögelerine tıkladığınızda sistem sizi gereken parçanın satın alma sayfasına yönlendiriyor:

*   [ESP32](https://www.robo90.com/esp32-wroom-32-wifi-ve-bluetooth-gelistirme-karti)
*   [Ekran](https://www.robo90.com/144-inch-oled-arduino-tft-lcd-ekran-modulu-128x128)
*   [Motor](https://www.robo90.com/28-byj-48-step-motor-ve-uln2003-step-motor-surucu-seti)
*   [Buzzer](https://www.robo90.com/buzzer-aktif-5v)
*   [Buton](https://www.robo90.com/pbs-33b-push-buton-oval-sari-mantar-buton)
*   [Dişi - Erkek Jumper](https://www.robo90.com/40li-ayrilabilen-disi-erkek-jumper-kablo-20cm-arduino-uyumlu)
*   [Dişi - Dişi Jumper](https://www.robo90.com/40li-ayrilabilen-disi-disi-jumper-kablo-20cm-arduino-uyum)
*   [Mini Breadboard](https://www.robo90.com/mini-breadboard-170-pin-yesil)


<img src="https://robo90.com/Data/EditorFiles/tasarim/robo90-logo.svg" alt="Robo90 Logo" width="300" />

---

İlk olarak şu parçaları edinmeniz gerekiyor. Alttaki liste ögelerine tıkladığınızda sistem sizi gereken parçanın satın alma sayfasına yönlendiriyor:

<ul>
  <li>
    <a href="https://www.robo90.com/esp32-wroom-32-wifi-ve-bluetooth-gelistirme-karti" class="hover-link" target="_blank">
      ESP32
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/144-inch-oled-arduino-tft-lcd-ekran-modulu-128x128" class="hover-link" target="_blank">
      Ekran
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/28-byj-48-step-motor-ve-uln2003-step-motor-surucu-seti" class="hover-link" target="_blank">
      Motor
      <img src="https://www.robo90.com/28-byj-48-step-motor-ve-uln2003-step-motor-surucu-seti-step-motor-robo90-robo90-40740-61-O.jpg" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/buzzer-aktif-5v" class="hover-link" target="_blank">
      Buzzer
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/pbs-33b-push-buton-oval-sari-mantar-buton" class="hover-link" target="_blank">
      Buton
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/40li-ayrilabilen-disi-erkek-jumper-kablo-20cm-arduino-uyumlu" class="hover-link" target="_blank">
      Dişi - Erkek Jumper
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/40li-ayrilabilen-disi-disi-jumper-kablo-20cm-arduino-uyum" class="hover-link" target="_blank">
      Dişi - Dişi Jumper
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
  
  <li>
    <a href="https://www.robo90.com/mini-breadboard-170-pin-yesil" class="hover-link" target="_blank">
      Mini Breadboard
      <img src="RESİM_LİNKİ_BURAYA" class="hover-img" />
    </a>
  </li>
</ul>


## 2. 3D Baskı Dosyaları

Şimdi sırada 3D baskı işi var. Aşağıdaki linkteki `.zip` dosyasında basılması gereken tüm parçalar mevcut.

👉 [**Hapiçe 3D Baskı Dosyalarını İndir**](/dosyalar/hapice-baski.zip)

---

## 3. Bağlantı Şeması

Artık hazırız. Şimdi sıra bağlantıları yapmakta. Şimdiki göreviniz aşağıdaki tablolara göre kablo bağlantılarını yapmak. 

Örneğin “ESP32’nin 5 numaralı pinini ekranın CS pinine bağla” ifadesi bu pinleri birbirine uygun bir jumper kablo bağlamayı ifade eder. Devre kartlarında **VCC, 5V, 3.3V, VIN** gibi ifadeler pillerdeki **"+"** kutbunu, **GND** ise **"-"** kutbunu ifade eder. Breadboard ile 1 pini çok pine çevireceğiz (üçlü priz mantığı). 

> ⚠️ **Önemli Uyarı:** ESP32'nin VIN pinini ve GND pinini jumper kablo ile breadboard’a taşımalısınız. Eğer VIN ve GND pinlerini birbirine temas ettirirseniz ESP32’niz bozulabilir!

### Ekran Bağlantısı
| ESP32 Pini | Ekran Pini |
| :--- | :--- |
| GND | GND |
| VIN | VCC |
| 18 | SCK |
| 23 | SDA |
| 22 | RES |
| 21 | A0 |
| 5 | CS |
| VIN | LED |

### Motor Bağlantısı
| ESP32 Pini | ULN2003 |
| :--- | :--- |
| 13 | IN1 |
| 12 | IN2 |
| 14 | IN3 |
| 27 | IN4 |
| GND | - |
| VIN | + (5V) |

### Buton ve Buzzer Bağlantıları
| ESP32 Pini | Buton | | ESP32 Pini | Hoparlör |
| :--- | :--- | :--- | :--- | :--- |
| 32 | PIN 1 | | 26 | + |
| GND | PIN 2 | | GND | - |

---

## 4. Montaj ve Güç Bağlantısı

Sadece bir **MicroUSB** kablosuna ihtiyacınız var. ESP32'ye takacağınız bu kablo ile tüm cihazı besleyebilirsiniz. 3D baskı alt kutusunun içerisinde her parçayı monte edebilmeniz için bariz kısımlar tasarladım. 

Montaj sırasında minik vidalara ihtiyacınız olacak. Ben 1000’li olarak şu linkten satın almıştım:
🔗 [Sywoods Mini Vida 2.2x6.5 mm (1000 Adet)](https://www.sywoods.com.tr/mini-vida-22x65-mm-1000-adet-sari)

---

## 5. Yazılım ve Kodu Yükleme

Sadece kodu yükleme kısmı kaldı. Önce ücretsiz Arduino IDE programını yüklemeniz gerekiyor:
🔗 [Arduino IDE İndir](https://www.arduino.cc/en/software)

**1. ESP32’yi Bilgisayara Bağlamak**
Micro USB kablonuzun bir ucunu ESP32’ye, diğer ucunu bilgisayarınıza takın. Kablonuzun sadece "şarj" eden değil, "veri aktarımı" yapan bir kablo olduğundan emin olun.

**2. Arduino IDE’ye ESP32’yi Tanıtmak**
* Arduino IDE’yi açın ve **Dosya > Tercihler** sekmesine tıklayın.
* “Ek Devre Kartları Yöneticisi URL’leri” kısmına şu linki yapıştırın: `https://dl.espressif.com/dl/package_esp32_index.json`
* **Araçlar > Kart > Kart Yöneticisi** bölümüne girip "ESP32" aratın ve kurun.

**3. Gerekli Kütüphaneleri Yüklemek**
Kütüphane Yöneticisi üzerinden sırasıyla şu paketleri kurun:
* `UniversalTelegramBot` (Brian Lough)
* `Adafruit GFX Library`
* `Adafruit ST7735 and ST7789 Library`
* `ArduinoJson` (Benoit Blanchon)

**4. Kodu Yapıştırmak ve Yüklemek**
* Arduino IDE’deki her şeyi silin ve aşağıdaki kodu yapıştırın.
* Kodun başındaki `XXXXXXXXXX` yazan kısımlara kendi **WiFi**, **Bot Token** ve **Chat ID** bilgilerinizi girin. *(Telegram botunu nasıl kuracağınızı videodan detaylı izleyebilirsiniz).*
* **Araçlar > Kart** kısmından `DOIT ESP32 DEVKIT V1` seçin, portunuzu ayarlayın ve "Yükle" okuna basın.
* Ekranda "Connecting..." yazısını gördüğünüzde ESP32 üzerindeki **BOOT** butonuna basılı tutun. Yüzde ilerlemeye başlayınca bırakabilirsiniz.

Kolay Gelsin! 🖐️

### Arduino IDE Kodu

```cpp
/*
  AKILLI İLAÇ DİSPANSERİ VE TAKİP SİSTEMİ
  Bu kod, saatlik ilaç rutinini takip eden, hastaya görsel/işitsel uyarı veren,
  motor mekanizması ile ilaç veren ve hasta yakınına Telegram üzerinden bilgi veren bir sistemdir.
*/

#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <UniversalTelegramBot.h>
#include <Preferences.h>
#include <Stepper.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>
#include <SPI.h>
#include <Fonts/FreeSansBold18pt7b.h>
#include <time.h>

// ==============================================================================
//  KULLANICI AYARLARI (KODLAMA BİLMEYENLER SADECE BURAYI DOLDURACAK) 
// ==============================================================================
const char* WIFI_SSID = "XXXXXXXXXX";        // WiFi Ağ Adı
const char* WIFI_PASSWORD = "XXXXXXXXXX";    // WiFi Şifresi
#define BOTtoken "XXXXXXXXXX"                // Telegram Bot Token (BotFather'dan alınır)
#define CHAT_ID "XXXXXXXXXX"                 // Bildirim gidecek kişinin Telegram Chat ID'si

// Cihazın kullanılacağı ülkenin saat dilimi (Türkiye için GMT+3 -> 3 * 3600 = 10800)
const long TIMEZONE_OFFSET = 10800;          
const int DAYLIGHT_OFFSET = 0;               // Yaz saati uygulaması (Türkiye'de kalktığı için 0)
// ==============================================================================
//  KULLANICI AYARLARI BİTİŞİ 
// ==============================================================================

// --- PIN TANIMLAMALARI ---
#define TFT_CS     5
#define TFT_RST    22 
#define TFT_DC     21 
#define TFT_MOSI   23 // SDA
#define TFT_SCLK   18 // SCK

#define MOTOR_IN1  13
#define MOTOR_IN2  12
#define MOTOR_IN3  14
#define MOTOR_IN4  27

#define BUTTON_PIN 32
#define BUZZER_PIN 26

// --- MELODİ NOTA FREKANSLARI ---
#define NOTE_C5  523
#define NOTE_D5  587
#define NOTE_E5  659
#define NOTE_F5  698
#define NOTE_G4  392
#define NOTE_G5  784
#define NOTE_A4  440
#define NOTE_A5  880
#define NOTE_B4  494

// Tetris Melodisi (Nota, Vuruş)
int Tetris[] = {
  NOTE_E5,4, NOTE_B4,8, NOTE_C5,8, NOTE_D5,4, NOTE_C5,8, NOTE_B4,8,
  NOTE_A4,4, NOTE_A4,8, NOTE_C5,8, NOTE_E5,4, NOTE_D5,8, NOTE_C5,8,
  NOTE_B4,4, NOTE_B4,8, NOTE_C5,8, NOTE_D5,4, NOTE_E5,4,
  NOTE_C5,4, NOTE_A4,4, NOTE_A4,2, 0,4,
  NOTE_D5,4, NOTE_F5,8, NOTE_A5,4, NOTE_G5,8, NOTE_F5,8,
  NOTE_E5,4, NOTE_C5,8, NOTE_E5,4, NOTE_D5,8, NOTE_C5,8,
  NOTE_B4,4, NOTE_B4,8, NOTE_C5,8, NOTE_D5,4, NOTE_E5,4,
  NOTE_C5,4, NOTE_A4,4, NOTE_A4,2, 0,4
};

// Başarı Melodisi
int basari[] = { NOTE_G4, 12, NOTE_C5, 12, NOTE_E5, 12, NOTE_G5, 4, NOTE_E5, 12, NOTE_G5, 2 };

// --- NESNELER ---
Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_RST);
Stepper stepper(2048, MOTOR_IN1, MOTOR_IN3, MOTOR_IN2, MOTOR_IN4);
WiFiClientSecure client;
UniversalTelegramBot bot(BOTtoken, client);
Preferences preferences;

// --- GLOBAL DEĞİŞKENLER (Çift Çekirdek uyumlu olması için volatile eklendi) ---
volatile unsigned long intervalSeconds = 0; // Artık saniye bazlı tutuyoruz (00:01 desteği için)
volatile unsigned long lastPillTime = 0;
volatile bool alarmActive = false;
volatile bool buzzerMuted = false;
volatile unsigned long alarmStartTime = 0;

volatile bool alert5MinSent = false;
volatile bool alert15MinSent = false;
volatile bool weeklyReportSent = false;
volatile bool forceScreenRefresh = false;

// Puanlama Sistemi
int totalDosesThisWeek = 0;
int onTimeDosesThisWeek = 0;

// Ekran tazeleme için
int sonSaat = -1;
int sonDakika = -1;
int sonSaniye = -1;
bool isFlashing = false;

// Kesme (Interrupt) için bayrak
volatile bool buttonPressed = false;

// --- TELEGRAM MESAJ KUYRUĞU (Çekirdekler arası iletişim) ---
#define MAX_MSG_QUEUE 10
String msgQueue[MAX_MSG_QUEUE];
volatile int queueHead = 0;
volatile int queueTail = 0;

void queueTelegramMessage(String msg) {
  int nextHead = (queueHead + 1) % MAX_MSG_QUEUE;
  if (nextHead != queueTail) { // Kuyruk dolu değilse
    msgQueue[queueHead] = msg;
    queueHead = nextHead;
  }
}

volatile unsigned long lastInterruptTime = 0;
void IRAM_ATTR handleButton() {
  unsigned long interruptTime = millis();
  // Buton sekmesini (bouncing) önlemek için 200 milisaniye koruma
  if (interruptTime - lastInterruptTime > 200) {
    buttonPressed = true;
  }
  lastInterruptTime = interruptTime;
}

// ==========================================
// TELEGRAM GÖREVİ (CORE 0 - Arka Plan)
// ==========================================
void telegramTaskCode(void * pvParameters) {
  for(;;) {
    // 1. Ana döngüden gelen (kuyruktaki) mesajları gönder
    while (queueTail != queueHead) {
      String msg = msgQueue[queueTail];
      bot.sendMessage(CHAT_ID, msg, "");
      queueTail = (queueTail + 1) % MAX_MSG_QUEUE;
    }
    
    // 2. Yeni mesajları kontrol et
    int numNewMessages = bot.getUpdates(bot.last_message_received + 1);
    while (numNewMessages) {
      handleTelegramMessages(numNewMessages);
      numNewMessages = bot.getUpdates(bot.last_message_received + 1);
    }
    
    // İşlemciyi ve WiFi'yi boğmamak için bekle
    vTaskDelay(2000 / portTICK_PERIOD_MS); 
  }
}

void setup() {
  Serial.begin(115200);
  
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  attachInterrupt(BUTTON_PIN, handleButton, FALLING); 
  
  stepper.setSpeed(15); 
  
  tft.initR(INITR_144GREENTAB); 
  tft.setRotation(2);
  tft.fillScreen(ST77XX_BLACK);
  
  tft.setTextColor(ST77XX_WHITE);
  tft.setTextSize(1);
  tft.setCursor(10, 10);

  if (String(WIFI_SSID) == "XXXXXXXXXX" || String(BOTtoken) == "XXXXXXXXXX") {
    tft.setTextColor(ST77XX_RED);
    tft.println("HATA!");
    tft.println("Lutfen kod icindeki");
    tft.println("WIFI, BOT_TOKEN ve");
    tft.println("CHAT_ID ayarlarini doldurun!");
    while (true); 
  }

  // NVS Başlat
  preferences.begin("ilac_app", false);
  intervalSeconds = preferences.getULong("intSec", 0); // Eski "interval" yerine intSec kullanıldı
  lastPillTime = preferences.getULong("lastPill", 0);
  totalDosesThisWeek = preferences.getInt("totDose", 0);
  onTimeDosesThisWeek = preferences.getInt("onTDose", 0);

  tft.println("Wifi Araniyor...");
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  client.setInsecure(); 

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
    tft.print(".");
  }
  
  tft.fillScreen(ST77XX_BLACK);
  tft.setCursor(10, 10);
  tft.setTextColor(ST77XX_GREEN);
  tft.println("Baglanti Basarili!");
  tft.setTextColor(ST77XX_WHITE);
  tft.println("Saat bilgisi aliniyor...");

  configTime(TIMEZONE_OFFSET, DAYLIGHT_OFFSET, "pool.ntp.org", "time.nist.gov");
  struct tm timeinfo;
  while (!getLocalTime(&timeinfo)) {
    Serial.println("NTP bekleniyor...");
    delay(1000);
  }
  tft.println("Saat guncellendi.");
  
  String baslangicMesaji = "🤖 Sistem Başlatıldı!\n";
  
  if (intervalSeconds == 0) {
    tft.fillScreen(ST77XX_BLACK);
    tft.setCursor(10, 50);
    tft.setTextColor(ST77XX_YELLOW);
    tft.println("Lutfen ilacin");
    tft.println("araligini");
    tft.println("Telegram'dan giriniz.");
    baslangicMesaji += "⚠️ Lütfen ilacın periyodunu giriniz. (Örn: 'aralık 8' veya 'aralık 00:01')";
  } else {
    baslangicMesaji += "✅ Süre aralığı hafızadan yüklendi.\nCihaz hazır.";
    tft.fillScreen(ST77XX_BLACK); 
    sonSaat = -1; sonDakika = -1; sonSaniye = -1; 
  }
  
  queueTelegramMessage(baslangicMesaji);

  // ESP32'nin Core 0'ında Telegram Görevini Başlat (Bu sayede ekran DONMAYACAK)
  xTaskCreatePinnedToCore(
    telegramTaskCode,
    "TelegramTask",
    10000,
    NULL,
    1,
    NULL,
    0);
}

void loop() {
  unsigned long currentUnixTime = getCurrentUnixTime();

  // Telegram üzerinden yeni veri girildiyse ekranı tazelemek için bayrak
  if (forceScreenRefresh) {
    tft.fillScreen(ST77XX_BLACK);
    sonSaat = -1; sonDakika = -1; sonSaniye = -1;
    forceScreenRefresh = false;
  }

  checkWeeklyReport();

  if (intervalSeconds == 0) return; // Ayar yapılana kadar beklet

  // SAYAÇ VE ALARM MANTIĞI
  long secondsRemaining = (lastPillTime + intervalSeconds) - currentUnixTime;

  if (secondsRemaining <= 0) {
    // ALARM DURUMU
    if (!alarmActive) {
      alarmActive = true;
      alarmStartTime = currentUnixTime;
      buzzerMuted = false;
      alert5MinSent = false;
      alert15MinSent = false;
      queueTelegramMessage("🚨 İlaç zamanı geldi! Alarm veriliyor."); // Bloklamadan gönder
      tft.fillScreen(ST77XX_BLACK);
      sonSaat = -1; sonDakika = -1; sonSaniye = -1;
    }
    
    long secondsLate = abs(secondsRemaining);
    ekraniCiz(secondsLate, true); 

    if (secondsLate >= 300 && !alert5MinSent) {
      queueTelegramMessage("⚠️ Alarm 5 dakikadır çalıyor, hasta hala ilacını almadı!");
      alert5MinSent = true;
    }
    if (secondsLate >= 900 && !alert15MinSent) {
      queueTelegramMessage("🆘 15 dakika oldu, lütfen hastaya ulaşınız!");
      alert15MinSent = true;
    }

    if (!buzzerMuted) {
      playTetrisNonBlocking(); 
    }

  } else {
    // NORMAL GERİ SAYIM
    alarmActive = false;
    ekraniCiz(secondsRemaining, false);
  }

  // BUTON KONTROLÜ
  if (buttonPressed) {
    buttonPressed = false; 
    
    // SADECE alarm aktifse (zamanı geldiyse) ilaç ver
    if (alarmActive) {
      ilacVer(currentUnixTime);
    } 
    // Zamanı gelmeden basılırsa sistem hiçbir şey yapmadan görmezden gelir.
  }
}

// ==========================================
// YARDIMCI FONKSİYONLAR
// ==========================================

void handleTelegramMessages(int numNewMessages) {
  for (int i = 0; i < numNewMessages; i++) {
    String chat_id = String(bot.messages[i].chat_id);
    if (chat_id != CHAT_ID) continue; 

    String text = bot.messages[i].text;
    text.toLowerCase();

    // Aralık algılama (Hem "aralık 8" hem "aralık 00:01" formatını destekler)
    if (text.startsWith("aralık ")) {
      String param = text.substring(7);
      param.trim();
      unsigned long yeniSaniye = 0;

      // HH:MM format kontrolü
      if (param.indexOf(':') != -1) {
        int separatorIndex = param.indexOf(':');
        int h = param.substring(0, separatorIndex).toInt();
        int m = param.substring(separatorIndex + 1).toInt();
        yeniSaniye = (h * 3600) + (m * 60);
      } else {
        // Sadece saat formatı
        yeniSaniye = param.toInt() * 3600;
      }

      if (yeniSaniye > 0) {
        intervalSeconds = yeniSaniye;
        preferences.putULong("intSec", intervalSeconds);
        
        if (lastPillTime == 0) {
           lastPillTime = getCurrentUnixTime();
           preferences.putULong("lastPill", lastPillTime);
        }
        
        forceScreenRefresh = true;
        bot.sendMessage(chat_id, "✅ Aralık ayarlandı. (" + param + ")", "");
      } else {
        bot.sendMessage(chat_id, "❌ Hatalı değer! Örnek: 'aralık 8' veya 'aralık 00:01'", "");
      }
    } 
    else if (text == "ilaç alındı" || text == "ilac alindi") {
      bot.sendMessage(chat_id, "✅ Komut alındı. Sayım sıfırlanıyor (Motor dönmeyecek).", "");
      resetTimer(getCurrentUnixTime());
    } 
    else if (text == "sustur") {
      if (alarmActive) {
        buzzerMuted = true;
        noTone(BUZZER_PIN);
        bot.sendMessage(chat_id, "🔇 Alarm susturuldu. Ekran yanıp sönmeye devam edecek.", "");
      } else {
        bot.sendMessage(chat_id, "Cihaz şu an zaten alarm durumunda değil.", "");
      }
    }
    else {
      bot.sendMessage(chat_id, "Komutlar:\n- aralık [saat] veya [saat:dakika] (Örn: aralık 8 veya aralık 00:01)\n- ilaç alındı\n- sustur", "");
    }
  }
}

void ilacVer(unsigned long currentUnixTime) {
  // 1. Gecikme süresini hesapla (Gerçek planlanan zaman ile şu anki zaman arası fark)
  long expectedPillTime = lastPillTime + intervalSeconds;
  long delaySecs = currentUnixTime - expectedPillTime;
  if (delaySecs < 0) delaySecs = 0; // Hata payı tedbiri
  
  int dHours = delaySecs / 3600;
  int dMins = (delaySecs / 60) % 60;
  int dSecs = delaySecs % 60;

  // Saniye verisini dakikaya yuvarla (30 saniye ve üzeri ise 1 dakika ekler)
  if (dSecs >= 30) {
    dMins++;
    if (dMins >= 60) {
      dMins = 0;
      dHours++;
    }
  }

  String gecikmeStr = "";
  if (dHours > 0) {
    gecikmeStr = String(dHours) + " saat " + String(dMins) + " dakika";
  } else {
    gecikmeStr = String(dMins) + " dakika";
  }

  // Puanlama Kontrolü
  totalDosesThisWeek++;
  if (delaySecs <= 900) { // İlk 15 dakika içinde alındıysa zamanında say
    onTimeDosesThisWeek++;
  }
  preferences.putInt("totDose", totalDosesThisWeek);
  preferences.putInt("onTDose", onTimeDosesThisWeek);

  noTone(BUZZER_PIN);
  
  // 2. ARA EKRAN: Gecikme Süresi (2 Saniye Bekler)
  tft.fillScreen(ST77XX_BLACK);
  tft.setFont(); // Standart okunabilir fonta dön
  tft.setTextSize(2);
  tft.setTextColor(ST77XX_YELLOW);
  tft.setCursor(16, 20);
  tft.print("Gecikme:");
  
  tft.setTextColor(ST77XX_WHITE);
  if (dHours > 0) {
    tft.setCursor(20, 50);
    tft.print(String(dHours) + " saat");
    tft.setCursor(20, 80);
    tft.print(String(dMins) + " dk");
  } else {
    tft.setCursor(10, 60);
    tft.print(String(dMins) + " dakika");
  }

  // Telegram Bildirimi (Kuyruğa atılır, donma yapmaz)
  queueTelegramMessage("💊 Hasta İlacını Aldı! Gecikme: " + gecikmeStr);

  delay(2000); // Ekrandaki gecikme yazısının okunması için 2 saniye bekle

  // 3. İLAÇ VERİLİYOR EKRANI
  tft.fillScreen(ST77XX_BLACK);
  tft.setFont(); // Standart font
  tft.setTextSize(2);
  tft.setTextColor(ST77XX_GREEN);
  tft.setCursor(16, 40);
  tft.print("Ilaciniz");
  tft.setCursor(10, 70);
  tft.print("veriliyor");
  
  // 4. Motoru Döndür
  stepper.step(147);
  
  digitalWrite(MOTOR_IN1, LOW);
  digitalWrite(MOTOR_IN2, LOW);
  digitalWrite(MOTOR_IN3, LOW);
  digitalWrite(MOTOR_IN4, LOW);

  playSuccessMelody();
  resetTimer(currentUnixTime);
  
  // İlaç verilirken gerçekleşmiş olabilecek tüm buton sekmelerini iptal et
  buttonPressed = false; 
}

void resetTimer(unsigned long currentUnixTime) {
  lastPillTime = currentUnixTime;
  preferences.putULong("lastPill", lastPillTime);
  alarmActive = false;
  buzzerMuted = false;
  alert5MinSent = false;
  alert15MinSent = false;
  forceScreenRefresh = true;
}

void playTetrisNonBlocking() {
  static int noteIndex = 0;
  static unsigned long previousMillis = 0;
  static bool isRest = false;
  static int currentDuration = 0;
  
  int totalNotes = sizeof(Tetris) / sizeof(Tetris[0]) / 2;
  int tempo = 144;
  int wholenote = (60000 * 4) / tempo;
  
  // O anki nota veya boşluk süresi doldu mu kontrol et
  if (millis() - previousMillis >= currentDuration) {
    previousMillis = millis(); // Zamanı sıfırla
    
    if (!isRest) {
      if (noteIndex >= totalNotes) noteIndex = 0;

      int noteVal = Tetris[noteIndex * 2];
      int divider = Tetris[(noteIndex * 2) + 1];

      if (divider > 0) {
        currentDuration = (wholenote) / divider;
      } else if (divider < 0) {
        currentDuration = (wholenote) / abs(divider);
        currentDuration *= 1.5;
      }

      if (noteVal != 0) tone(BUZZER_PIN, noteVal, currentDuration * 0.9);
      else noTone(BUZZER_PIN);
      
      isRest = true; // Sırada kısa bir boşluk var
    } else {
      noTone(BUZZER_PIN);
      currentDuration = 20; // Notalar arası staccato (kesik çalma) için 20ms boşluk
      isRest = false;
      noteIndex++;
    }
  }
}

void playSuccessMelody() {
  int tempo = 120;
  int wholenote = (60000 * 4) / tempo;
  for (int i = 0; i < sizeof(basari) / sizeof(basari[0]) / 2; i++) {
    int divider = basari[i * 2 + 1];
    int noteDuration = (wholenote) / divider;
    tone(BUZZER_PIN, basari[i * 2], noteDuration * 0.9);
    delay(noteDuration);
    noTone(BUZZER_PIN);
  }
}

void ekraniCiz(long saniyeVerisi, bool isAlarm) {
  int saat = (saniyeVerisi / 3600);
  int dakika = (saniyeVerisi / 60) % 60;
  int saniye = saniyeVerisi % 60;

  char metinKutusu[15];

  if (isAlarm) {
    // ALARM EKRANI TASARIMI (Rengarenk + İLAÇ ZAMANI + 00:00:00)
    uint16_t renkler[] = {ST77XX_RED, ST77XX_BLUE, ST77XX_MAGENTA, ST77XX_YELLOW, ST77XX_GREEN};
    int renkIndeksi = (millis() / 300) % 5; // Her 300ms'de bir renk değişir
    uint16_t bgColor = renkler[renkIndeksi];
    
    static int sonRenkIndeksi = -1;

    // Sadece renk değiştiğinde veya saniye arttığında ekranı tazele (Titremeyi engeller)
    if (sonRenkIndeksi != renkIndeksi || saniye != sonSaniye || !isFlashing) {
      tft.fillScreen(bgColor);
      
      tft.setFont(); // Standart temiz pixel fonta geç
      tft.setTextSize(2);
      tft.setTextColor(ST77XX_BLACK); // <-- YAZI RENGİ SİYAH OLARAK GÜNCELLENDİ
      
      // Ekrana ortalamak için manuel koordinatlar (128x128 ekran için)
      tft.setCursor(40, 15);
      tft.print("ILAC");
      tft.setCursor(28, 35);
      tft.print("ZAMANI");

      // Gecikme etiketi
      tft.setTextSize(1);
      tft.setCursor(43, 70);
      tft.print("Gecikme");

      // 00:00:00 Gecikme sayacı
      sprintf(metinKutusu, "%02d:%02d:%02d", saat, dakika, saniye);
      tft.setTextSize(2);
      tft.setCursor(16, 85); // Tam ortaya hizalandı
      tft.print(metinKutusu);

      sonRenkIndeksi = renkIndeksi;
      sonSaat = saat;
      sonDakika = dakika;
      sonSaniye = saniye;
      isFlashing = true; // Alarm döngüsünde olduğumuzu işaretle
    }
  } else {
    // NORMAL GERİ SAYIM EKRANI TASARIMI
    if (isFlashing) { 
      tft.fillScreen(ST77XX_BLACK); // Alarm bittiyse ekranı siyah yap
      sonSaat = -1; sonDakika = -1; sonSaniye = -1;
      isFlashing = false;
    }

    uint16_t bgColor = ST77XX_BLACK;

    if (saat != sonSaat) {
      sprintf(metinKutusu, "%02d", saat);
      tft.fillRect(25, 10, 60, 32, bgColor); 
      tft.setFont(&FreeSansBold18pt7b);
      tft.setTextSize(1); 
      tft.setCursor(30, 38);
      tft.setTextColor(ST77XX_CYAN);
      tft.print(metinKutusu);

      tft.setFont(); 
      tft.setTextSize(1);
      tft.setCursor(90, 25);
      tft.setTextColor(ST77XX_WHITE);
      tft.print("SAAT");
      sonSaat = saat;
    }

    if (dakika != sonDakika) {
      sprintf(metinKutusu, "%02d", dakika);
      tft.fillRect(25, 50, 60, 32, bgColor);
      tft.setFont(&FreeSansBold18pt7b);
      tft.setCursor(30, 78);
      tft.setTextColor(ST77XX_GREEN);
      tft.print(metinKutusu);

      tft.setFont();
      tft.setCursor(90, 65);
      tft.setTextColor(ST77XX_WHITE);
      tft.print("DAK");
      sonDakika = dakika;
    }

    if (saniye != sonSaniye) {
      sprintf(metinKutusu, "%02d", saniye);
      tft.fillRect(25, 90, 60, 32, bgColor);
      tft.setFont(&FreeSansBold18pt7b);
      tft.setCursor(30, 118);
      tft.setTextColor(ST77XX_YELLOW);
      tft.print(metinKutusu);

      tft.setFont();
      tft.setCursor(90, 105);
      tft.setTextColor(ST77XX_WHITE);
      tft.print("SAN");
      sonSaniye = saniye;
    }
  }
}

unsigned long getCurrentUnixTime() {
  time_t now;
  time(&now);
  return now;
}

void checkWeeklyReport() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) return;

  if (timeinfo.tm_wday == 0 && timeinfo.tm_hour == 21 && timeinfo.tm_min == 0) {
    if (!weeklyReportSent) {
      
      int score = 100; 
      if (totalDosesThisWeek > 0) {
        score = (onTimeDosesThisWeek * 100) / totalDosesThisWeek;
      }

      String report = "📊 HAFTALIK İLAÇ RAPORU 📊\n\n";
      report += "Bu hafta alınması gereken: " + String(totalDosesThisWeek) + "\n";
      report += "Zamanında alınan: " + String(onTimeDosesThisWeek) + "\n";
      report += "\n💯 HAFTALIK PUAN: " + String(score) + "/100\n";
      
      if(score == 100) report += "Mükemmel! Bütün ilaçlar zamanında alındı.";
      else if(score > 70) report += "İyi ama biraz daha dikkat edilebilir.";
      else report += "Lütfen hastanın ilaç rutinini sıkı takibe alınız!";

      queueTelegramMessage(report);

      totalDosesThisWeek = 0;
      onTimeDosesThisWeek = 0;
      preferences.putInt("totDose", 0);
      preferences.putInt("onTDose", 0);

      weeklyReportSent = true;
    }
  } else {
    weeklyReportSent = false;
  }
}





<style>
  /* Linklerin genel ayarı */
  .hover-link {
    position: relative;
    display: inline-block;
    text-decoration: underline;
    font-weight: 500;
  }
  
  /* Gizli olarak bekleyecek olan resim ayarı */
  .hover-link .hover-img {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 130%; /* Resim yazının biraz üstünde belirir */
    left: 50%;
    transform: translateX(-50%); /* Tam ortalar */
    width: 150px; /* Resmin genişliğini buradan ayarlayabilirsiniz */
    border-radius: 8px; /* Köşeleri hafif yuvarlatır */
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3); /* Şık bir gölge ekler */
    transition: opacity 0.2s ease-in-out; /* Yumuşak geçiş animasyonu */
    z-index: 100;
    pointer-events: none; /* Resmin üzerine gelindiğinde titremeyi engeller */
  }

  /* Fare linkin üzerine gelince resmi göster */
  .hover-link:hover .hover-img {
    visibility: visible;
    opacity: 1;
  }
</style>