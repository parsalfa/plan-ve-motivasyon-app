# 📱 Plan & Motivasyon Hatırlatıcı - Kurulum ve Derleme Rehberi

## Uygulamaya Hoş Geldiniz! 🎉

Bu rehber, **Plan & Motivasyon Hatırlatıcı** Android uygulamasını kurmanız ve kullanmanız için adım adım talimatlar içerir.

---

## 📋 Uygulamanın Özellikleri

✅ **Günlük Plan Yönetimi**
- Günün herhangi bir saatinde yapılacak işleri ekleyin
- Her plan için bildirim saati belirleyin
- Planları tamamlandı olarak işaretleyin veya silin

✅ **Motivasyon Bildirimleri**
- Gün boyu 5 farklı saatte motivasyon sözleri alın
- Sabah, öğlen, öğleden sonra, akşam ve gece motivasyonu
- Her saat için özel olarak hazırlanmış 35+ motivasyon sözü

✅ **Kolay Kullanım**
- Basit ve sezgisel arayüz
- Hızlı plan ekleme
- Bildirimler otomatik olarak zamanlanır

---

## 🛠️ Sistem Gereksinimleri

- **Android Sürümü**: 7.0 (API 24) veya üstü
- **RAM**: Minimum 2GB
- **Depolama**: 50MB boş alan

---

## 📥 Kurulum Adımları

### Seçenek 1: APK Dosyasından Kurulum (Önerilen)

1. **APK Dosyasını İndirin**
   - `plan-ve-motivasyon-app.apk` dosyasını Android cihazınıza kopyalayın

2. **Bilinmeyen Kaynakları Etkinleştirin**
   - Ayarlar → Güvenlik → Bilinmeyen Kaynaklar → Etkinleştir
   - (Android 8.0+: Ayarlar → Uygulamalar → Özel Uygulama İzinleri → Bilinmeyen Kaynaktan Yükleme)

3. **APK Dosyasını Açın**
   - Dosya yöneticisinde `plan-ve-motivasyon-app.apk` dosyasını bulun
   - Dosyaya dokunun ve "Yükle" seçeneğini seçin

4. **İzinleri Onaylayın**
   - Uygulama bildirimleri göndermek için izin isteyecektir
   - "İzin Ver" seçeneğini seçin

5. **Kurulum Tamamlandı!**
   - Uygulama başlatılmaya hazırdır

---

## 🚀 Kullanım Talimatları

### Günlük Plan Ekleme

1. **Ana Ekranda** "Günlük Planlar" sekmesine gidin
2. **"Yapılacak İş"** alanına görevinizi yazın
   - Örnek: "Tester takım çantası hazırla"
3. **Bildirim Saati** seçin (saat kaydırıcısından)
4. **"➕ Plan Ekle"** düğmesine basın
5. Bildirim zamanlandığını gösteren mesajı görürsünüz

### Planları Yönetme

- **Planı Tamamla**: Planın yanındaki ○ düğmesine basın (✓ olur)
- **Planı Sil**: Planın yanındaki 🗑 düğmesine basın
- **Planları Görüntüle**: Tüm planlar saate göre sıralanır

### Motivasyon Sözlerini Görüntüleme

1. **"Motivasyon"** sekmesine gidin
2. **Mevcut Saatin Motivasyon Sözü** gösterilir
3. **"🔄 Yeni Söz Göster"** düğmesine basarak farklı sözler görebilirsiniz
4. **Tüm Motivasyon Sözleri** bölümünde saate göre kategorize edilmiş tüm sözleri görebilirsiniz

### Bildirim Saatleri

Uygulama otomatik olarak aşağıdaki saatlerde motivasyon bildirimleri gönderir:

| Saat | Motivasyon Türü |
|------|-----------------|
| 06:30 | 🌅 Sabah Motivasyonu |
| 12:00 | ☀️ Öğlen Motivasyonu |
| 15:30 | 🌤️ Öğleden Sonra Motivasyonu |
| 18:00 | 🌆 Akşam Motivasyonu |
| 21:00 | 🌙 Gece Motivasyonu |

---

## ⚙️ Ayarlar ve Özelleştirme

### Bildirimleri Etkinleştirme

1. Ayarlar → Uygulamalar → Plan & Motivasyon Hatırlatıcı
2. Bildirimler → Tüm Bildirimleri Etkinleştir

### Ses ve Titreşim

- Bildirimlerin sesli ve titreşimli gelmesi varsayılan olarak açıktır
- Cihaz ayarlarından değiştirebilirsiniz

---

## 🔧 Teknik Bilgiler

### Proje Yapısı

```
plan-ve-motivasyon-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Günlük Planlar ekranı
│   │   ├── explore.tsx         # Motivasyon Sözleri ekranı
│   │   └── _layout.tsx         # Tab navigasyonu
│   └── _layout.tsx             # Ana layout
├── services/
│   └── notificationService.ts  # Bildirim yönetimi
├── constants/
│   └── motivationalQuotes.ts   # Motivasyon sözleri veritabanı
└── app.json                    # Uygulama konfigürasyonu
```

### Kullanılan Teknolojiler

- **React Native**: Mobil uygulama geliştirme
- **Expo**: React Native geliştirme platformu
- **TypeScript**: Tür güvenliği
- **Expo Notifications**: Bildirim sistemi
- **AsyncStorage**: Yerel veri depolama

---

## 🐛 Sorun Giderme

### Bildirimler Gelmiyor

1. **Bildirimleri Etkinleştirin**
   - Ayarlar → Uygulamalar → Plan & Motivasyon Hatırlatıcı → Bildirimler → Etkinleştir

2. **Cihazın Saati Doğru Olduğundan Emin Olun**
   - Ayarlar → Tarih ve Saat → Otomatik Saat Ayarı

3. **Uygulamayı Yeniden Başlatın**
   - Uygulamayı kapatın ve yeniden açın

### Uygulama Çöküyor

1. Uygulamayı kaldırın
2. Cihazı yeniden başlatın
3. Uygulamayı yeniden yükleyin

### Planlar Kaydedilmiyor

1. Cihazın yeterli depolama alanı olduğundan emin olun
2. Uygulamayı kaldırıp yeniden yükleyin

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:

1. Uygulamayı kaldırıp yeniden yükleyin
2. Cihazı yeniden başlatın
3. Tüm adımları tekrar deneyin

---

## 📝 Sürüm Bilgisi

- **Sürüm**: 1.0.0
- **Derleme Tarihi**: 13 Mayıs 2026
- **Geliştirici**: Manus AI
- **Lisans**: Ücretsiz Kullanım

---

## ✨ Motivasyon Sözleri Örneği

### 🌅 Sabah Motivasyonu (06:00-09:00)
- "Günaydın! Bugün senin gün. Başla ve başarıyı yakala!"
- "Yeni bir gün, yeni fırsatlar. Haydi başlayalım!"
- "Sabah erken kalkan, başarıya ulaşan. Harika bir gün olacak!"

### ☀️ Öğlen Motivasyonu (12:00-14:00)
- "Yarı yoldasın! Devam et, hedefin yakın!"
- "Öğlen enerjisi! Kalan görevleri bitir!"
- "Sabah başarılarını kutla, öğleden sonra daha da iyi olacak!"

### 🌤️ Öğleden Sonra Motivasyonu (15:00-17:00)
- "Akşama doğru, son spurtunu ver!"
- "Gün bitmek üzere ama sen daha güçlüsün!"
- "Bitirmek için gereken enerji içinde var!"

### 🌆 Akşam Motivasyonu (18:00-21:00)
- "Bugün ne kadar başarılı oldun! Kendin için gurur duy!"
- "Akşam saati, başarıları değerlendirme zamanı!"
- "Bugün savaştın, bugün kazandın!"

### 🌙 Gece Motivasyonu (21:00-23:59)
- "Uyumadan önce, bugünün güzelliklerini hatırla!"
- "Rahat uyku, yarın yeni başarılar için!"
- "Gece saati, ruh ve beden dinlenme zamanı!"

---

## 🎯 İpuçları

1. **Planları Sabah Planlayın**: Günü başında tüm planlarınızı ekleyin
2. **Bildirimler Açık Tutun**: Motivasyon sözlerinden faydalanmak için
3. **Planları Tamamla**: Tamamlanan planları işaretleyin, ilerlemenizi görün
4. **Motivasyon Sözlerini Okuyun**: Zor zamanlarında motivasyon sözlerini tekrar okuyun

---

## 🙏 Teşekkürler

Bu uygulamayı kullandığınız için teşekkürler! Umarız günlük planlarınızı daha etkili bir şekilde yönetmenize ve motivasyonunuzu korumaya yardımcı olur.

**Başarılar dilerim! 🚀**

---

*Son Güncelleme: 13 Mayıs 2026*
