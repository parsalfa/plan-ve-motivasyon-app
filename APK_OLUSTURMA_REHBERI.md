# 🔨 APK Oluşturma Rehberi

## Durum

Sistem Java 17 gerektirmektedir ancak sandboxta Java 11 bulunmaktadır. APK oluşturmak için aşağıdaki yöntemlerden birini kullanabilirsiniz.

---

## 📌 Yöntem 1: Expo EAS Build Kullanarak (Önerilen)

### Adım 1: Expo Hesabı Oluşturun
```bash
npx expo register
# veya
npx expo login
```

### Adım 2: EAS Build Başlatın
```bash
cd /home/ubuntu/plan-ve-motivasyon-app
eas build --platform android --local
```

### Adım 3: APK'yı İndirin
Build tamamlandıktan sonra, APK dosyasını indirin ve Android cihazınıza kurun.

---

## 📌 Yöntem 2: Docker Kullanarak (Lokal)

### Adım 1: Docker Kurulumu
```bash
sudo apt-get install docker.io
sudo usermod -aG docker $USER
```

### Adım 2: Android Build Container
```bash
docker run --rm -it \
  -v /home/ubuntu/plan-ve-motivasyon-app:/app \
  -w /app \
  node:18 \
  bash -c "npm install && npx expo prebuild --clean && cd android && ./gradlew assembleDebug"
```

---

## 📌 Yöntem 3: GitHub Actions Kullanarak (Ücretsiz)

### Adım 1: GitHub Repository Oluşturun
```bash
cd /home/ubuntu/plan-ve-motivasyon-app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/plan-ve-motivasyon-app.git
git push -u origin main
```

### Adım 2: GitHub Actions Workflow Oluşturun
`.github/workflows/build.yml` dosyasını oluşturun:

```yaml
name: Build APK

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Setup Java
      uses: actions/setup-java@v2
      with:
        distribution: 'temurin'
        java-version: '17'
    
    - name: Install dependencies
      run: npm install
    
    - name: Prebuild
      run: npx expo prebuild --clean
    
    - name: Build APK
      run: cd android && ./gradlew assembleDebug
    
    - name: Upload APK
      uses: actions/upload-artifact@v2
      with:
        name: app-debug.apk
        path: android/app/build/outputs/apk/debug/app-debug.apk
```

### Adım 3: Build Başlatın
GitHub'a push ettikten sonra Actions sekmesinden build'i izleyin.

---

## 📌 Yöntem 4: Lokal Bilgisayarınızda Derleme

### Windows/Mac/Linux'ta:

1. **Java 17 Kurulumu**
   ```bash
   # macOS
   brew install openjdk@17
   
   # Ubuntu/Debian
   sudo apt-get install openjdk-17-jdk
   
   # Windows
   # https://www.oracle.com/java/technologies/downloads/#java17 adresinden indirin
   ```

2. **Android SDK Kurulumu**
   ```bash
   # Android Studio'yu indirin ve kurun
   # https://developer.android.com/studio
   ```

3. **Proje Klonlama**
   ```bash
   git clone https://github.com/YOUR_USERNAME/plan-ve-motivasyon-app.git
   cd plan-ve-motivasyon-app
   ```

4. **Bağımlılıkları Yükleme**
   ```bash
   npm install
   ```

5. **Prebuild**
   ```bash
   npx expo prebuild --clean
   ```

6. **APK Oluşturma**
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

7. **APK Konumu**
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

---

## 📌 Yöntem 5: Expo Go Uygulaması Kullanarak (Hızlı Test)

### Adım 1: Expo Go'yu İndirin
- Google Play Store'dan "Expo Go" uygulamasını indirin

### Adım 2: Geliştirme Sunucusunu Başlatın
```bash
cd /home/ubuntu/plan-ve-motivasyon-app
npm start
```

### Adım 3: QR Kodu Tarayın
- Expo Go uygulamasında QR kodu tarayın
- Uygulama yüklenecektir

**Not**: Bu yöntem test için iyidir ama APK dosyası oluşturmaz.

---

## 🎯 Önerilen Yöntem

**Expo EAS Build** (Yöntem 1) en kolay ve en güvenilir yöntemdir:
- Hiçbir yerel kurulum gerekmez
- Bulut üzerinde derlenir
- Otomatik imzalama
- Tüm bağımlılıklar yönetilir

---

## ⚠️ Sorun Giderme

### "Java 17 gerekli" Hatası
```bash
# Java sürümünü kontrol edin
java -version

# Java 17'yi kurun
sudo apt-get install openjdk-17-jdk

# JAVA_HOME'u ayarlayın
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
```

### "Android SDK bulunamadı" Hatası
```bash
# Android SDK'yı kurun
# https://developer.android.com/studio adresinden Android Studio'yu indirin
```

### Gradle Hatası
```bash
# Gradle cache'i temizleyin
cd android
./gradlew clean
./gradlew assembleDebug
```

---

## 📦 Oluşturulan APK Dosyası

APK başarıyla oluşturulduktan sonra:

1. **Dosya Konumu**: `android/app/build/outputs/apk/debug/app-debug.apk`
2. **Dosya Boyutu**: ~50-100 MB
3. **İmzalama**: Debug imzası (Play Store'a yüklemek için release imzası gerekir)

---

## 🚀 APK'yı Cihaza Yükleme

### USB Kablosu Kullanarak
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Dosya Transferi Kullanarak
1. APK dosyasını cihaza kopyalayın
2. Dosya yöneticisinde açın
3. "Yükle" seçeneğini seçin

---

## 📝 Notlar

- **Debug APK**: Geliştirme ve test için
- **Release APK**: Play Store'a yükleme için (ek imzalama gerekir)
- **Boyut**: Debug APK daha büyüktür (~100 MB)
- **Performans**: Release APK daha hızlıdır

---

## 🔗 Faydalı Kaynaklar

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Android Developer Guide](https://developer.android.com/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

---

*Son Güncelleme: 13 Mayıs 2026*
