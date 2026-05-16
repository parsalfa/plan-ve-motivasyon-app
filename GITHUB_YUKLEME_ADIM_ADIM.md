# 📤 GitHub'a Yükleme - Adım Adım Rehber

## 🎯 Amaç

Proje dosyalarını GitHub'a yükleyerek, GitHub Actions otomatik olarak APK'yı derleyebilecek.

---

## 📋 Adım 1: GitHub Hesabı Oluştur (Zaten Varsa Atla)

1. [github.com](https://github.com) adresine git
2. "Sign up" seçeneğine tıkla
3. E-mail, şifre ve kullanıcı adını gir
4. E-mail doğrulamasını yap

**Örnek:**
- E-mail: `senin_email@gmail.com`
- Kullanıcı Adı: `rafik123` (bunu hatırla!)
- Şifre: Güvenli bir şifre

---

## 📋 Adım 2: Yeni Repository Oluştur

### GitHub Web Arayüzünde:

1. GitHub'a giriş yap
2. Sağ üst köşede **"+"** simgesine tıkla
3. **"New repository"** seçeneğini seç

### Repository Ayarları:

```
Repository name: plan-ve-motivasyon-app
Description: Günlük plan hatırlatıcı ve motivasyon uygulaması
Visibility: Public (Herkese açık)
Initialize this repository with:
  ☑ Add a README file
```

4. **"Create repository"** düğmesine tıkla

**Sonuç:** Repository oluşturuldu!
URL: `https://github.com/KULLANICI_ADIN/plan-ve-motivasyon-app`

---

## 📋 Adım 3: Bilgisayarında Git Kur (Windows/Mac/Linux)

### Windows:
1. [git-scm.com](https://git-scm.com) adresine git
2. "Download for Windows" seçeneğine tıkla
3. İndirileni çalıştır ve kur (Next → Next → Finish)

### Mac:
```bash
brew install git
```

### Linux (Ubuntu/Debian):
```bash
sudo apt-get install git
```

---

## 📋 Adım 4: Proje Dosyalarını Hazırla

### Bilgisayarında Terminal/Komut Satırı Aç

**Windows:**
- Başlat → "cmd" yaz → Enter

**Mac/Linux:**
- Terminal uygulamasını aç

### Proje Dizinine Git

```bash
cd /home/ubuntu/plan-ve-motivasyon-app
```

**veya Windows'ta:**
```bash
cd C:\Users\Kullanici\plan-ve-motivasyon-app
```

---

## 📋 Adım 5: Git'i Yapılandır

Bilgisayarında ilk defa kullanıyorsan:

```bash
git config --global user.email "senin_email@gmail.com"
git config --global user.name "Senin Adın"
```

**Örnek:**
```bash
git config --global user.email "rafik@gmail.com"
git config --global user.name "Rafik"
```

---

## 📋 Adım 6: GitHub'a Bağla ve Yükle

### Terminal/Komut Satırında Çalıştır:

```bash
# Proje dizininde olduğundan emin ol
cd /home/ubuntu/plan-ve-motivasyon-app

# Git'i başlat (zaten başlatılmışsa atla)
git init

# Tüm dosyaları ekle
git add .

# Commit'i yap
git commit -m "İlk commit - Plan ve Motivasyon Hatırlatıcı"

# GitHub'a bağla (KULLANICI_ADIN yerine kendi adını yaz!)
git remote add origin https://github.com/KULLANICI_ADIN/plan-ve-motivasyon-app.git

# Main branch'ine geç
git branch -M main

# GitHub'a yükle
git push -u origin main
```

### Şifre İsterse:

1. GitHub'da **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. **"Generate new token"** seçeneğine tıkla
3. **Scopes:** `repo` seçeneğini işaretle
4. **"Generate token"** düğmesine tıkla
5. Token'i kopyala
6. Terminal'de istenen yere yapıştır

---

## ✅ Kontrol Et

### GitHub'da Kontrol:

1. GitHub'da repository'e git
2. Dosyaları gör:
   - ✅ `app/` klasörü
   - ✅ `services/` klasörü
   - ✅ `constants/` klasörü
   - ✅ `.github/workflows/build-apk.yml` ← **Bu önemli!**
   - ✅ `package.json`
   - ✅ `app.json`

**Tüm dosyalar varsa, başarılı! ✅**

---

## 📋 Adım 7: Build'i Başlat

### Otomatik Build (Kod Push Ettiğinde)

Build otomatik olarak başlayacak. Kontrol etmek için:

1. GitHub'da repository'e git
2. **"Actions"** sekmesine tıkla
3. **"Build APK"** workflow'unu gör
4. Durumunu izle:
   - 🟡 Devam ediyor
   - ✅ Başarılı
   - ❌ Başarısız

### Manuel Build (Hemen Başlat)

1. GitHub'da **"Actions"** sekmesine tıkla
2. Sol tarafta **"Build APK"** seçeneğine tıkla
3. **"Run workflow"** düğmesine tıkla
4. **"Run workflow"** seçeneğini seç

---

## ⏱️ Build Zamanı

Build tamamlanması ortalama **12-15 dakika** sürer.

Adımlar:
1. ✅ Node.js kurulumu (~1 dakika)
2. ✅ Java 17 kurulumu (~1 dakika)
3. ✅ Bağımlılıkları yükleme (~2 dakika)
4. ✅ Prebuild (~3 dakika)
5. ✅ Gradle build (~5 dakika)

---

## 📋 Adım 8: APK'yı İndir

### Build Tamamlandıktan Sonra:

1. GitHub'da **"Actions"** sekmesine tıkla
2. En son build'e tıkla (Yeşil ✅ işareti olmalı)
3. Sayfayı aşağı kaydır
4. **"Artifacts"** bölümünü gör
5. **"app-debug.apk"** seçeneğine tıkla
6. APK dosyası indirilecek

**APK dosyası indirildi! 🎉**

---

## 📱 Adım 9: APK'yı Android Cihaza Kur

### USB Kablosu Kullanarak:

1. Android cihazını bilgisayara bağla
2. APK dosyasını cihaza kopyala
3. Cihazda dosya yöneticisini aç
4. APK dosyasını bul
5. Dosyaya dokunun
6. **"Yükle"** seçeneğini seç
7. Tamamlandı! ✅

### Bildirimler:

1. Uygulama açılacak
2. "Bildirimleri Etkinleştir" mesajı göreceksin
3. **"İzin Ver"** seçeneğini seç

---

## 🔄 Güncellemeler

Uygulamayı güncellemek için:

1. **Bilgisayarında değişiklik yap**
   - Dosyaları düzenle

2. **Git'e commit et:**
```bash
git add .
git commit -m "Güncelleme: Yeni özellik eklendi"
git push
```

3. **GitHub Actions otomatik olarak yeni APK'yı derler**
   - Actions sekmesinde izle

4. **Yeni APK'yı indir ve cihaza kur**

---

## ⚠️ Sorun Giderme

### "Repository not found" Hatası

```
Çözüm:
1. GitHub'da repository'in var mı kontrol et
2. URL'i kontrol et (KULLANICI_ADIN doğru mu?)
3. Tekrar dene
```

### "Permission denied" Hatası

```
Çözüm:
1. Personal access token oluştur
2. Token'i şifre olarak kullan
3. Tekrar dene
```

### Build Başarısız Oldu

```
Çözüm:
1. GitHub'da Actions sekmesine git
2. Build'e tıkla
3. Hata mesajını oku
4. Dosyaları kontrol et
5. Tekrar push et
```

### APK İndirilemiyor

```
Çözüm:
1. Build'in başarılı olduğunu kontrol et (✅)
2. Artifacts bölümünü gör
3. Sayfayı yenile (F5)
4. Tekrar dene
```

---

## 🎯 Özet

```
1. GitHub hesabı oluştur
   ↓
2. Repository oluştur
   ↓
3. Git'i kur
   ↓
4. Proje dosyalarını GitHub'a yükle
   ↓
5. Build'i izle (Actions sekmesi)
   ↓
6. APK'yı indir (12-15 dakika sonra)
   ↓
7. Android cihaza kur
   ↓
8. Uygulamayı aç ve kullan! 🎉
```

---

## 📞 Hızlı Referans

| İşlem | Komut |
|-------|-------|
| Proje dizinine git | `cd /path/to/project` |
| Git'i başlat | `git init` |
| Dosyaları ekle | `git add .` |
| Commit'i yap | `git commit -m "Mesaj"` |
| GitHub'a bağla | `git remote add origin URL` |
| GitHub'a yükle | `git push -u origin main` |
| Güncellemeleri yükle | `git push` |

---

## ✅ Kontrol Listesi

- [ ] GitHub hesabı oluşturdum
- [ ] Repository oluştum
- [ ] Git'i kurdum
- [ ] Proje dosyalarını GitHub'a yükledim
- [ ] Workflow dosyası var (.github/workflows/build-apk.yml)
- [ ] Build başladı
- [ ] Build tamamlandı (✅)
- [ ] APK'yı indirdim
- [ ] APK'yı cihaza kurdum
- [ ] Uygulama çalışıyor

---

## 🎉 Tamamlandı!

Artık GitHub Actions ile otomatik olarak APK oluşturabilirsin!

**Başarılar! 🚀**

---

*Son Güncelleme: 13 Mayıs 2026*
