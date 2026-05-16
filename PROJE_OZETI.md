# 📱 Plan & Motivasyon Hatırlatıcı - Proje Özeti

## 🎯 Proje Hedefi

Günlük planları yönetmek ve gün boyu motivasyon sözleri gönderen bir Android mobil uygulaması geliştirmek.

---

## ✨ Ana Özellikler

### 1. 📋 Günlük Plan Yönetimi
- Günün herhangi bir saatinde plan ekleyin
- Her plan için bildirim saati belirleyin
- Planları tamamlandı olarak işaretleyin
- Planları silin
- Planlar otomatik olarak saate göre sıralanır

### 2. 💪 Motivasyon Bildirimleri
- Gün boyu 5 farklı saatte motivasyon sözleri
- 35+ özel olarak yazılmış motivasyon sözü
- Saate göre kategorize edilmiş sözler:
  - 🌅 Sabah (06:00-09:00)
  - ☀️ Öğlen (12:00-14:00)
  - 🌤️ Öğleden Sonra (15:00-17:00)
  - 🌆 Akşam (18:00-21:00)
  - 🌙 Gece (21:00-23:59)

### 3. 🔔 Bildirim Sistemi
- Otomatik bildirim zamanlaması
- Ses ve titreşim desteği
- Arka planda çalışan bildirim servisi
- Bildirimleri özelleştirme seçeneği

### 4. 💾 Yerel Veri Depolama
- AsyncStorage kullanarak yerel depolama
- Tüm veriler cihazda güvenli şekilde saklanır
- İnternet bağlantısı gerekmez

---

## 🏗️ Proje Yapısı

```
plan-ve-motivasyon-app/
│
├── app/                                    # Ana uygulama dizini
│   ├── _layout.tsx                        # Root layout (bildirim başlatma)
│   ├── (tabs)/                            # Tab navigasyonu
│   │   ├── _layout.tsx                   # Tab layout
│   │   ├── index.tsx                     # Günlük Planlar ekranı
│   │   └── explore.tsx                   # Motivasyon Sözleri ekranı
│   └── modal.tsx                         # Modal ekranı (template)
│
├── services/
│   └── notificationService.ts            # Bildirim yönetimi
│       ├── initializeNotifications()     # Bildirimleri başlat
│       ├── schedulePlanNotification()    # Plan bildirimi zamanla
│       ├── scheduleMotivationNotifications() # Motivasyon bildirimleri
│       ├── saveDailyPlan()               # Plan kaydet
│       ├── getDailyPlans()               # Planları al
│       ├── markPlanAsCompleted()         # Planı tamamla
│       ├── deletePlan()                  # Planı sil
│       └── cancelNotification()          # Bildirimi iptal et
│
├── constants/
│   ├── motivationalQuotes.ts             # Motivasyon sözleri veritabanı
│   │   ├── motivationalQuotes[]          # Tüm motivasyon sözleri
│   │   └── getQuoteByHour()              # Saate göre söz seç
│   └── theme.ts                          # Tema renkleri
│
├── components/                            # Yeniden kullanılabilir bileşenler
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   ├── haptic-tab.tsx
│   └── ...
│
├── hooks/                                 # Custom hooks
│   └── use-color-scheme.tsx
│
├── assets/                                # Görsel kaynaklar
│   ├── images/
│   │   ├── icon.png
│   │   ├── splash-icon.png
│   │   └── ...
│   └── fonts/
│
├── app.json                               # Expo konfigürasyonu
├── package.json                           # Bağımlılıklar
├── tsconfig.json                          # TypeScript konfigürasyonu
├── eas.json                               # EAS Build konfigürasyonu
└── android/                               # Android native kodu
    ├── app/
    │   └── build.gradle
    ├── build.gradle
    └── gradle.properties
```

---

## 🔧 Kullanılan Teknolojiler

| Teknoloji | Sürüm | Amaç |
|-----------|-------|------|
| React Native | 0.81.5 | Mobil uygulama geliştirme |
| Expo | 54.0.33 | React Native geliştirme platformu |
| TypeScript | 5.9.2 | Tür güvenliği |
| React Navigation | 7.1.8 | Ekranlar arası navigasyon |
| Expo Notifications | 15.0.8 | Bildirim sistemi |
| AsyncStorage | 1.x | Yerel veri depolama |
| TailwindCSS | Uyumlu | Stil (Expo uyumlu) |

---

## 📱 Ekran Tasarımları

### 1. Günlük Planlar Ekranı (index.tsx)

```
┌─────────────────────────┐
│ 📋 Günlük Planlar       │
│ Bugün yapacağın görevleri│
│ ekle ve zamanında bildi  │
├─────────────────────────┤
│ Yapılacak İş            │
│ ┌─────────────────────┐ │
│ │ Örn: Tester takım...│ │
│ └─────────────────────┘ │
│                         │
│ Bildirim Saati          │
│ [06:00] [07:00] [08:00] │
│ [09:00] [10:00] ...     │
│                         │
│ ➕ Plan Ekle            │
├─────────────────────────┤
│ Bugünün Planları (3)    │
│ ┌─────────────────────┐ │
│ │ ⏰ 09:00            │ │
│ │ Tester takım çantası│ │
│ │ hazırla             │ ○ 🗑│
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ⏰ 12:00            │ │
│ │ Kameralar kontrol   │ │
│ │ et                  │ ✓ 🗑│
│ └─────────────────────┘ │
└─────────────────────────┘
```

### 2. Motivasyon Sözleri Ekranı (explore.tsx)

```
┌─────────────────────────┐
│ 💪 Motivasyon Sözleri   │
│ Gün boyu seni motive    │
│ etmek için hazırlanmış  │
├─────────────────────────┤
│ 🌅 Sabah Motivasyonu    │
│ ┌─────────────────────┐ │
│ │ "Günaydın! Bugün    │ │
│ │  senin gün. Başla   │ │
│ │  ve başarıyı yakala!"│ │
│ └─────────────────────┘ │
│ 🔄 Yeni Söz Göster      │
├─────────────────────────┤
│ Tüm Motivasyon Sözleri  │
│ 🌅 Sabah motivasyonu    │
│ • Günaydın! Bugün...    │
│ • Yeni bir gün, yeni... │
│ • Sabah erken kalkan... │
│                         │
│ ☀️ Öğlen motivasyonu    │
│ • Yarı yoldasın!...     │
│ • Öğlen enerjisi!...    │
│                         │
│ 📱 Bildirim Saatleri    │
│ 🌅 Sabah: 06:30         │
│ ☀️ Öğlen: 12:00         │
│ 🌤️ Öğleden Sonra: 15:30 │
│ 🌆 Akşam: 18:00         │
│ 🌙 Gece: 21:00          │
└─────────────────────────┘
```

---

## 🔄 Veri Akışı

### Plan Ekleme Akışı

```
Kullanıcı Plan Giriş Yapar
        ↓
Plan Doğrulaması
        ↓
saveDailyPlan() → AsyncStorage
        ↓
schedulePlanNotification()
        ↓
Expo Notifications
        ↓
Bildirim Zamanlandı
        ↓
UI Güncelleme
```

### Bildirim Gönderme Akışı

```
Uygulama Başlatılır
        ↓
initializeNotifications()
        ↓
scheduleMotivationNotifications()
        ↓
5 Bildirim Zamanlandı (Günlük)
        ↓
Saat Geldiğinde
        ↓
Expo Notifications Tetiklenir
        ↓
Cihaza Bildirim Gönderilir
```

---

## 💾 Veri Modeli

### Plan Objesi
```typescript
interface Plan {
  id: string;              // Benzersiz ID
  plan: string;            // Plan açıklaması
  time: string;            // Bildirim saati (HH:MM)
  date: string;            // Tarih (YYYY-MM-DD)
  completed: boolean;      // Tamamlanma durumu
  createdAt: string;       // Oluşturma zamanı
}
```

### Motivasyon Sözü
```typescript
interface Quote {
  text: string;            // Söz metni
  hour: string;            // Saat kategorisi
}
```

---

## 🎨 Renk Şeması

| Bileşen | Renk | Kullanım |
|---------|------|---------|
| Birincil | #4CAF50 (Yeşil) | Düğmeler, aktif durumlar |
| İkincil | #FF6B6B (Kırmızı) | Motivasyon, vurgu |
| Arka Plan | #f9f9f9 (Açık Gri) | Kart arka planları |
| Metin | #333 (Koyu Gri) | Ana metin |
| Hafif | #999 (Orta Gri) | Placeholder, ikincil metin |

---

## 🚀 Başlatma Süreci

1. **Uygulama Başlatılır**
   - `app/_layout.tsx` yüklenir
   - `useEffect` hook'u çalışır

2. **Bildirimleri Başlat**
   - `initializeNotifications()` çağrılır
   - Kullanıcıdan izin istenir

3. **Motivasyon Bildirimleri Zamanla**
   - `scheduleMotivationNotifications()` çağrılır
   - 5 bildirim zamanlandı

4. **Ana Ekran Göster**
   - Tab navigasyonu yüklenir
   - Günlük Planlar ekranı gösterilir

---

## 📊 Bildirim Zamanlaması

```
06:30 → 🌅 Sabah Motivasyonu
        ↓
12:00 → ☀️ Öğlen Motivasyonu
        ↓
15:30 → 🌤️ Öğleden Sonra Motivasyonu
        ↓
18:00 → 🌆 Akşam Motivasyonu
        ↓
21:00 → 🌙 Gece Motivasyonu
```

---

## 🔐 Güvenlik ve Gizlilik

- ✅ Tüm veriler cihazda saklanır
- ✅ İnternet bağlantısı gerekmez
- ✅ Hiçbir kişisel veri sunucuya gönderilmez
- ✅ Yerel AsyncStorage kullanır
- ✅ Standart Android izinleri

---

## 📈 Performans

- **APK Boyutu**: ~50-100 MB
- **RAM Kullanımı**: ~50-100 MB
- **Depolama**: ~10-20 MB
- **Başlatma Süresi**: <2 saniye
- **Bildirim Gecikmesi**: <1 saniye

---

## 🔄 Güncelleme Planı

### Gelecek Sürümler İçin Öneriler

1. **Sürüm 1.1**
   - Özel motivasyon sözleri ekleme
   - Bildirim saatlerini özelleştirme
   - Tema seçimi (Açık/Koyu)

2. **Sürüm 1.2**
   - Kategori desteği (İş, Kişisel, Spor)
   - Tekrarlayan planlar
   - İstatistikler ve raporlar

3. **Sürüm 2.0**
   - Bulut senkronizasyonu
   - Çoklu cihaz desteği
   - Sosyal paylaşım

---

## 📝 Dosya Listesi

### Oluşturulan Dosyalar

1. **services/notificationService.ts** - Bildirim yönetimi servisi
2. **constants/motivationalQuotes.ts** - Motivasyon sözleri veritabanı
3. **app/_layout.tsx** - Güncellenmiş root layout
4. **app/(tabs)/_layout.tsx** - Güncellenmiş tab layout
5. **app/(tabs)/index.tsx** - Günlük Planlar ekranı
6. **app/(tabs)/explore.tsx** - Motivasyon Sözleri ekranı
7. **eas.json** - EAS Build konfigürasyonu

### Yüklenen Paketler

- expo-notifications
- expo-task-manager
- @react-native-async-storage/async-storage

---

## 🎓 Öğrenme Kaynakları

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react/hooks)

---

## 📞 Destek ve Geri Bildirim

Herhangi bir sorun veya öneriniz varsa, lütfen bildirin.

---

## 📄 Lisans

Bu proje açık kaynaklı ve ücretsiz olarak kullanılabilir.

---

*Proje Oluşturma Tarihi: 13 Mayıs 2026*
*Son Güncelleme: 13 Mayıs 2026*
