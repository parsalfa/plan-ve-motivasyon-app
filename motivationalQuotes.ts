export const motivationalQuotes = [
  // Sabah motivasyonu (06:00-09:00)
  "Günaydın! Bugün senin gün. Başla ve başarıyı yakala!",
  "Yeni bir gün, yeni fırsatlar. Haydi başlayalım!",
  "Sabah erken kalkan, başarıya ulaşan. Harika bir gün olacak!",
  "Her sabah yeni bir başlangıç. Bugün harika olacak!",
  "Enerjin yüksek, motivasyonun tam. Haydi gün başlasın!",
  "Sabah güneşi gibi parla ve ışı saç!",
  "Bugün senin potansiyeli gösterme günü!",
  
  // Öğlen motivasyonu (12:00-14:00)
  "Yarı yoldasın! Devam et, hedefin yakın!",
  "Öğlen enerjisi! Kalan görevleri bitir!",
  "Sabah başarılarını kutla, öğleden sonra daha da iyi olacak!",
  "Gün ortasında güç topla, ikinci yarı seni bekliyor!",
  "Kahveni al, nefes al, devam et!",
  "Öğlen arası, kendine biraz bakma zamanı. Sonra daha güçlü dön!",
  "Bugüne kadar yaptıklarını görmek güzel, değil mi?",
  
  // Öğleden sonra motivasyonu (15:00-17:00)
  "Akşama doğru, son spurtunu ver!",
  "Gün bitmek üzere ama sen daha güçlüsün!",
  "Bitirmek için gereken enerji içinde var!",
  "Son saatler, son çabalar. Sonu güzel yap!",
  "Akşama doğru, başarılarını topla!",
  "Gün sona ermeden hedefine ulaş!",
  "Bitirmek için gereken kararlılık var mısın? Elbette var!",
  
  // Akşam motivasyonu (18:00-21:00)
  "Bugün ne kadar başarılı oldun! Kendin için gurur duy!",
  "Akşam saati, başarıları değerlendirme zamanı!",
  "Bugün savaştın, bugün kazandın!",
  "Akşam geldi, başarılarını kutla!",
  "Gün sona eriyor ama senin başarıların kalıyor!",
  "Kendine iyi bak, yarın yine başaracaksın!",
  "Bugün için teşekkür et, yarın için hazırlan!",
  
  // Gece motivasyonu (21:00-23:59)
  "Uyumadan önce, bugünün güzelliklerini hatırla!",
  "Rahat uyku, yarın yeni başarılar için!",
  "Gece saati, ruh ve beden dinlenme zamanı!",
  "Yarın yeni bir fırsat. İyi uyu!",
  "Bugün bittiği için mutlu ol, yarın için hazırlan!",
  "Uyku, başarının sırrı. Rahat uyu!",
  "Gece huzuru, gündüz başarısı. İyi geceler!",
];

export const getQuoteByHour = (hour: number): string => {
  const morningQuotes = motivationalQuotes.slice(0, 7);
  const noonQuotes = motivationalQuotes.slice(7, 14);
  const afternoonQuotes = motivationalQuotes.slice(14, 21);
  const eveningQuotes = motivationalQuotes.slice(21, 28);
  const nightQuotes = motivationalQuotes.slice(28);

  if (hour >= 6 && hour < 9) {
    return morningQuotes[Math.floor(Math.random() * morningQuotes.length)];
  } else if (hour >= 12 && hour < 14) {
    return noonQuotes[Math.floor(Math.random() * noonQuotes.length)];
  } else if (hour >= 15 && hour < 17) {
    return afternoonQuotes[Math.floor(Math.random() * afternoonQuotes.length)];
  } else if (hour >= 18 && hour < 21) {
    return eveningQuotes[Math.floor(Math.random() * eveningQuotes.length)];
  } else {
    return nightQuotes[Math.floor(Math.random() * nightQuotes.length)];
  }
};
