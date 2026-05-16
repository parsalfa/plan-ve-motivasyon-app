#!/bin/bash

# APK oluşturma betiği
cd /home/ubuntu/plan-ve-motivasyon-app

echo "📱 Plan & Motivasyon Hatırlatıcı APK'sı oluşturuluyor..."
echo ""

# Expo ile debug APK oluştur
echo "1️⃣ Debug APK oluşturuluyor..."
npx eas build --platform android --local --output=/home/ubuntu/plan-ve-motivasyon-app.apk 2>&1

if [ -f "/home/ubuntu/plan-ve-motivasyon-app.apk" ]; then
    echo ""
    echo "✅ APK başarıyla oluşturuldu!"
    echo "📍 Konum: /home/ubuntu/plan-ve-motivasyon-app.apk"
    ls -lh /home/ubuntu/plan-ve-motivasyon-app.apk
else
    echo ""
    echo "⚠️ APK oluşturma başarısız. Alternatif yöntem deneniyor..."
    
    # Alternatif: Gradle ile debug APK oluştur
    cd /home/ubuntu/plan-ve-motivasyon-app/android
    echo "2️⃣ Gradle ile debug APK oluşturuluyor..."
    ./gradlew assembleDebug 2>&1 | tail -20
    
    if [ -f "app/build/outputs/apk/debug/app-debug.apk" ]; then
        cp app/build/outputs/apk/debug/app-debug.apk /home/ubuntu/plan-ve-motivasyon-app.apk
        echo ""
        echo "✅ Debug APK başarıyla oluşturuldu!"
        echo "📍 Konum: /home/ubuntu/plan-ve-motivasyon-app.apk"
        ls -lh /home/ubuntu/plan-ve-motivasyon-app.apk
    else
        echo ""
        echo "❌ APK oluşturma başarısız oldu."
        exit 1
    fi
fi
