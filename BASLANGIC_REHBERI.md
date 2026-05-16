# 🚀 Plan & Motivasyon Hatırlatıcı - Başlangıç Rehberi

Hoş geldiniz! Bu rehber, **Plan & Motivasyon Hatırlatıcı** Android uygulamasını hızlı bir şekilde kurmanız ve kullanmaya başlamanız için tasarlanmıştır.

---

## 📦 Paket İçeriği

Aşağıdaki dosyaları bulacaksınız:

### 📄 Dokümantasyon Dosyaları

1. **KURULUM_VE_DERLEME_REHBERI.md** ⭐
   - Uygulamayı Android cihazınıza kurma adımları
   - Sistem gereksinimleri
   - Sorun giderme rehberi

2. **APK_OLUSTURMA_REHBERI.md**
   - APK dosyasını oluşturmanın farklı yolları
   - Expo EAS Build kullanımı
   - Docker ve GitHub Actions ile derleme

3. **PROJE_OZETI.md**
   - Teknik proje detayları
   - Dosya yapısı
   - Kullanılan teknolojiler

4. **BASLANGIC_REHBERI.md** (Bu dosya)
   - Hızlı başlangıç rehberi

### 📱 Uygulama Dosyaları

- **plan-ve-motivasyon-app-source.tar.gz** (2.7 MB)
  - Tüm proje kaynak kodu
  - Tüm bileşenler ve servisleri içerir

---

## ⚡ Hızlı Başlangıç (5 Dakika)

### Adım 1: Uygulamayı Kurun

**Seçenek A: APK Dosyasından (Önerilen)**

1. APK dosyasını Android cihazınıza kopyalayın
2. Dosya yöneticisinde açın
3. "Yükle" seçeneğini seçin
4. Bildirimleri etkinleştirin

**Seçenek B: Kaynak Koddan**

```bash
# Kaynak kodu çıkartın
tar -xzf plan-ve-motivasyon-app-source.tar.gz
cd plan-ve-motivasyon-app

# Bağımlılıkları yükleyin
npm install

# APK oluşturun (Expo EAS Build)
eas build --platform android

# veya lokal olarak
npx expo prebuild --clean
cd android
./gradlew assembleDebug
```

### Adım 2: İlk Kullanım

1. Uygulamayı açın
2. "Günlük Planlar" sekmesine gidin
3. İlk planınızı ekleyin:
   - Örnek: "Sabah kahvesi al"
   - Saat: 08:00 seçin
   - "➕ Plan Ekle" düğmesine basın

4. "Motivasyon" sekmesine gidin
5. Motivasyon sözlerini görüntüleyin

### Adım 3: Bildirimleri Ayarlayın

1. Ayarlar → Uygulamalar → Plan & Motivasyon Hatırlatıcı
2. Bildirimler → Tüm Bildirimleri Etkinleştir
3. Ses ve Titreşim → Etkinleştir

---

## 🎯 Temel Özellikler

### 📋 Plan Ekleme

```
1. "Günlük Planlar" sekmesine gidin
2. Yapılacak işi yazın
3. Bildirim saatini seçin
4. "➕ Plan Ekle" düğmesine basın
5. Bildirim zamanlandı!
```

### 💪 Motivasyon Sözlerini Görüntüleme

```
1. "Motivasyon" sekmesine gidin
2. Mevcut saatin motivasyon sözünü görüntüleyin
3. "🔄 Yeni Söz Göster" ile farklı sözler görün
4. Tüm sözleri saate göre kategorize edilmiş şekilde görüntüleyin
```

### 🔔 Otomatik Bildirimler

Uygulama her gün bu saatlerde motivasyon sözleri gönderir:

| Saat | Motivasyon |
|------|-----------|
| 06:30 | 🌅 Sabah |
| 12:00 | ☀️ Öğlen |
| 15:30 | 🌤️ Öğleden Sonra |
| 18:00 | 🌆 Akşam |
| 21:00 | 🌙 Gece |

---

## 📱 Ekran Rehberi

### Günlük Planlar Ekranı

```
┌─────────────────────────────────┐
│ 📋 Günlük Planlar              │
├─────────────────────────────────┤
│ Yapılacak İş:                   │
│ [Tester takım çantası hazırla]  │
│                                 │
│ Bildirim Saati:                 │
│ [06:00] [07:00] [08:00] [09:00] │
│                                 │
│ ➕ Plan Ekle                     │
├─────────────────────────────────┤
│ Bugünün Planları (2)            │
│ ⏰ 09:00 - Tester takım çantası │
│ ○ 🗑                             │
│                                 │
│ ⏰ 12:00 - Kameralar kontrol et │
│ ✓ 🗑                             │
└─────────────────────────────────┘
```

### Motivasyon Ekranı

```
┌─────────────────────────────────┐
│ 💪 Motivasyon Sözleri          │
├─────────────────────────────────┤
│ 🌅 Sabah Motivasyonu            │
│ "Günaydın! Bugün senin gün.     │
│  Başla ve başarıyı yakala!"     │
│ 🔄 Yeni Söz Göster              │
├─────────────────────────────────┤
│ Tüm Motivasyon Sözleri          │
│ 🌅 Sabah motivasyonu (06:00)    │
│ • Günaydın! Bugün senin gün...  │
│ • Yeni bir gün, yeni fırsatlar  │
│ • Sabah erken kalkan...         │
│                                 │
│ ☀️ Öğlen motivasyonu (12:00)    │
│ • Yarı yoldasın! Devam et...    │
│ • Öğlen enerjisi!...            │
└─────────────────────────────────┘
```

---

## ❓ Sık Sorulan Sorular

### S: Bildirimler gelmiyor?
**C:** 
1. Bildirimleri etkinleştirdiğinizden emin olun
2. Cihazın saatini kontrol edin
3. Uygulamayı yeniden başlatın

### S: Planlarım kaydedilmiyor?
**C:**
1. Cihazda yeterli depolama alanı olduğundan emin olun
2. Uygulamayı kaldırıp yeniden yükleyin
3. Cihazı yeniden başlatın

### S: APK dosyasını nasıl kurarım?
**C:**
1. APK dosyasını cihaza kopyalayın
2. Dosya yöneticisinde açın
3. "Yükle" seçeneğini seçin
4. Bilinmeyen kaynakları etkinleştirmeniz gerekebilir

### S: Motivasyon sözlerini değiştirebilir miyim?
**C:**
Şu anda özel sözler ekleme özelliği yoktur, ancak gelecek sürümlerde eklenecektir.

### S: Uygulamayı silebilir miyim?
**C:**
Evet, Ayarlar → Uygulamalar → Plan & Motivasyon Hatırlatıcı → Kaldır

---

## 🔧 Sistem Gereksinimleri

| Gereksinim | Değer |
|-----------|-------|
| Android Sürümü | 7.0+ (API 24+) |
| RAM | 2GB minimum |
| Depolama | 50MB boş alan |
| İnternet | Gerekli değil |

---

## 📚 Detaylı Rehberler

Daha detaylı bilgi için diğer rehberleri okuyun:

1. **KURULUM_VE_DERLEME_REHBERI.md** - Kurulum ve sorun giderme
2. **APK_OLUSTURMA_REHBERI.md** - APK oluşturma yöntemleri
3. **PROJE_OZETI.md** - Teknik detaylar

---

## 🎓 Öğrenme Kaynakları

- [React Native Belgeleri](https://reactnative.dev/)
- [Expo Belgeleri](https://docs.expo.dev/)
- [Android Geliştirici Rehberi](https://developer.android.com/)

---

## 💡 İpuçları

1. **Planları Sabah Planlayın**: Günü başında tüm planlarınızı ekleyin
2. **Bildirimleri Açık Tutun**: Motivasyon sözlerinden faydalanmak için
3. **Planları Tamamla**: Tamamlanan planları işaretleyin, ilerlemenizi görün
4. **Motivasyon Sözlerini Okuyun**: Zor zamanlarında tekrar okuyun

---

## 🚀 Sonraki Adımlar

1. ✅ Uygulamayı kurun
2. ✅ İlk planınızı ekleyin
3. ✅ Motivasyon sözlerini keşfedin
4. ✅ Bildirimleri etkinleştirin
5. ✅ Günlük kullanmaya başlayın

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:

1. **KURULUM_VE_DERLEME_REHBERI.md** dosyasındaki "Sorun Giderme" bölümünü okuyun
2. Uygulamayı kaldırıp yeniden yükleyin
3. Cihazı yeniden başlatın

---

## 🎉 Başarılar!

Artık **Plan & Motivasyon Hatırlatıcı** uygulamasını kullanmaya hazırsınız!

Günlük planlarınızı etkili bir şekilde yönetin ve gün boyu motivasyon sözleriyle enerjili kalın.

**Başarılar dilerim! 🚀**

---

## 📋 Kontrol Listesi

Uygulamayı kullanmaya başlamadan önce:

- [ ] Uygulamayı kurdum
- [ ] Bildirimleri etkinleştirdim
- [ ] İlk planımı ekledim
- [ ] Motivasyon sözlerini gördüm
- [ ] Bildirim saatlerini kontrol ettim
- [ ] Ayarları özelleştirdim

---

*Son Güncelleme: 13 Mayıs 2026*

**Hoş geldiniz! Başarılar dilerim! 🎊**
