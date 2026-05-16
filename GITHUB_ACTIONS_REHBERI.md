# 🚀 GitHub Actions ile APK Oluşturma Rehberi

## 📌 Nedir GitHub Actions?

GitHub Actions, GitHub'ın ücretsiz CI/CD (Continuous Integration/Continuous Deployment) hizmetidir. Kodunu GitHub'a yükledikten sonra, otomatik olarak APK'yı derleyip indirebilirsin.

**Avantajları:**
- ✅ Tamamen ücretsiz
- ✅ Hiçbir kurulum gerekmez
- ✅ Otomatik derleme
- ✅ APK'yı direkt indir

---

## 📋 Adım 1: GitHub Hesabı Oluştur

1. [github.com](https://github.com) adresine git
2. "Sign up" seçeneğine tıkla
3. E-mail, şifre ve kullanıcı adını gir
4. E-mail doğrulamasını yap

**Zaten hesabın varsa, adım 2'ye geç!**

---

## 📋 Adım 2: Yeni Repository Oluştur

1. GitHub'a giriş yap
2. Sağ üst köşede "+" simgesine tıkla
3. "New repository" seçeneğini seç
4. Aşağıdaki bilgileri gir:

```
Repository name: plan-ve-motivasyon-app
Description: Günlük plan hatırlatıcı ve motivasyon uygulaması
Visibility: Public (Herkese açık)
Initialize this repository with: 
  ☑ Add a README file
```

5. "Create repository" düğmesine tıkla

---

## 📋 Adım 3: Proje Dosyalarını GitHub'a Yükle

### Seçenek A: Git Komut Satırı Kullanarak (Önerilen)

1. **Bilgisayarında terminal/komut satırı aç**

2. **Proje dizinine git:**
```bash
cd /home/ubuntu/plan-ve-motivasyon-app
```

3. **Git başlat:**
```bash
git init
git add .
git commit -m "İlk commit - Plan ve Motivasyon Hatırlatıcı"
```

4. **GitHub'a bağla:**
```bash
git remote add origin https://github.com/KULLANICI_ADIN/plan-ve-motivasyon-app.git
git branch -M main
git push -u origin main
```

**Not:** `KULLANICI_ADIN` yerine GitHub kullanıcı adını yaz!

### Seçenek B: GitHub Web Arayüzü Kullanarak

1. GitHub'da repository'e git
2. "Add file" → "Upload files" seçeneğine tıkla
3. Proje dosyalarını sürükle ve bırak
4. "Commit changes" düğmesine tıkla

---

## 📋 Adım 4: GitHub Actions Workflow'u Ekle

Workflow dosyası zaten proje içinde var: `.github/workflows/build-apk.yml`

Eğer yoksa, manuel olarak ekle:

1. GitHub'da repository'e git
2. "Add file" → "Create new file" seçeneğine tıkla
3. Dosya adını yaz:
```
.github/workflows/build-apk.yml
```

4. Aşağıdaki kodu yapıştır:

```yaml
name: Build APK

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Setup Java
      uses: actions/setup-java@v3
      with:
        distribution: 'temurin'
        java-version: '17'
    
    - name: Install dependencies
      run: npm install
    
    - name: Prebuild Android
      run: npx expo prebuild --clean --platform android
    
    - name: Build APK (Debug)
      run: cd android && ./gradlew assembleDebug
    
    - name: Upload APK Artifact
      uses: actions/upload-artifact@v3
      with:
        name: app-debug.apk
        path: android/app/build/outputs/apk/debug/app-debug.apk
        retention-days: 30
```

5. "Commit new file" düğmesine tıkla

---

## 📋 Adım 5: Build'i Başlat

### Otomatik Build (Kod Push Ettiğinde)

1. Bilgisayarında değişiklik yap
2. Git'e commit et:
```bash
git add .
git commit -m "Değişiklikler"
git push
```

3. GitHub'da "Actions" sekmesine git
4. Build'i izle

### Manuel Build (Hemen Başlat)

1. GitHub'da "Actions" sekmesine git
2. Sol tarafta "Build APK" seçeneğine tıkla
3. "Run workflow" düğmesine tıkla
4. "Run workflow" seçeneğini seç

---

## 📋 Adım 6: APK'yı İndir

### Build Tamamlandıktan Sonra

1. GitHub'da "Actions" sekmesine git
2. En son build'e tıkla
3. "Artifacts" bölümünde "app-debug.apk" seçeneğini gör
4. İndir düğmesine tıkla

**APK dosyası indirilecek!** 🎉

---

## 🔍 Build Durumunu İzle

### Actions Sekmesinde

1. GitHub'da repository'e git
2. "Actions" sekmesine tıkla
3. Build'in durumunu gör:
   - 🟡 Devam ediyor
   - ✅ Başarılı
   - ❌ Başarısız

### Build Günlüğünü Görüntüle

1. Build'e tıkla
2. "build" işine tıkla
3. Her adımın çıktısını gör

---

## ⚠️ Sorun Giderme

### Build Başarısız Oldu

1. **Build günlüğünü oku:**
   - GitHub'da "Actions" → Build → "build" işine tıkla
   - Hata mesajını bul

2. **Yaygın Hatalar:**

   **Hata: "node_modules not found"**
   ```
   Çözüm: npm install otomatik çalışır, bekle
   ```

   **Hata: "Java 17 gerekli"**
   ```
   Çözüm: Workflow dosyasında Java 17 kurulu, sorun olmamalı
   ```

   **Hata: "Gradle build failed"**
   ```
   Çözüm: 
   1. Proje dosyalarını kontrol et
   2. Workflow'u yeniden çalıştır
   ```

### Build Hiç Başlamıyor

1. Workflow dosyasının doğru yerde olduğunu kontrol et: `.github/workflows/build-apk.yml`
2. Dosya adını kontrol et (tam olarak yazılmış mı?)
3. Repository'i yenile (F5)

---

## 📊 Build Zamanı

Ortalama build süresi:

| Adım | Süre |
|------|------|
| Node.js Kurulumu | ~1 dakika |
| Java Kurulumu | ~1 dakika |
| Bağımlılıklar | ~2 dakika |
| Prebuild | ~3 dakika |
| Gradle Build | ~5 dakika |
| **Toplam** | **~12 dakika** |

---

## 💾 Dosya Yapısı

GitHub'a yüklemek gereken dosyalar:

```
plan-ve-motivasyon-app/
├── .github/
│   └── workflows/
│       └── build-apk.yml          ⭐ Bu dosya önemli!
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   └── _layout.tsx
│   └── _layout.tsx
├── services/
│   └── notificationService.ts
├── constants/
│   └── motivationalQuotes.ts
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Adım Adım Özet

```
1. GitHub hesabı oluştur
   ↓
2. Yeni repository oluştur
   ↓
3. Proje dosyalarını GitHub'a yükle
   ↓
4. Workflow dosyasını ekle (.github/workflows/build-apk.yml)
   ↓
5. Build'i başlat (otomatik veya manuel)
   ↓
6. Build tamamlanana kadar bekle (~12 dakika)
   ↓
7. APK'yı indir
   ↓
8. Android cihazına kur
```

---

## 🔐 Güvenlik Notları

- ✅ GitHub Actions tamamen güvenlidir
- ✅ Hiçbir şifre veya kişisel veri gerekmez
- ✅ Build logları herkese açık (istersen gizli yapabilirsin)
- ✅ APK dosyası 30 gün saklanır

---

## 📱 APK'yı Cihaza Yükle

APK'yı indirdikten sonra:

1. **Android cihazına kopyala**
   - USB kablosu ile bağla
   - APK dosyasını kopyala

2. **Dosya yöneticisinde aç**
   - Dosya yöneticisini aç
   - APK dosyasını bul
   - Dosyaya dokunun

3. **Yükle seçeneğini seç**
   - "Yükle" düğmesine basın
   - Bildirimleri etkinleştir

4. **Tamamlandı!** 🎉

---

## 🔄 Güncellemeler

Uygulamayı güncellemek için:

1. Bilgisayarında değişiklik yap
2. Git'e commit et ve push et
3. GitHub Actions otomatik olarak yeni APK'yı derler
4. Yeni APK'yı indir ve cihaza kur

---

## 📚 Faydalı Kaynaklar

- [GitHub Actions Belgeleri](https://docs.github.com/en/actions)
- [GitHub Başlangıç Rehberi](https://docs.github.com/en/get-started)
- [Git Belgeleri](https://git-scm.com/doc)

---

## ✅ Kontrol Listesi

- [ ] GitHub hesabı oluşturdum
- [ ] Repository oluştum
- [ ] Proje dosyalarını GitHub'a yükledim
- [ ] Workflow dosyasını ekledim
- [ ] Build'i başlattım
- [ ] Build tamamlandı
- [ ] APK'yı indirdim
- [ ] APK'yı cihaza kurdum
- [ ] Uygulama çalışıyor

---

## 🎉 Tamamlandı!

Artık GitHub Actions ile otomatik olarak APK oluşturabilirsin!

Her kod değişikliğinde, GitHub otomatik olarak yeni APK'yı derleyecek.

**Başarılar! 🚀**

---

*Son Güncelleme: 13 Mayıs 2026*
