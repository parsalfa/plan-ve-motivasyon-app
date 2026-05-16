import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { motivationalQuotes, getQuoteByHour } from '@/constants/motivationalQuotes';

interface Quote {
  text: string;
  hour: string;
}

export default function MotivationScreen() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentHour, setCurrentHour] = useState('');
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    updateQuote();
    const interval = setInterval(updateQuote, 60000); // Her dakika güncelle
    return () => clearInterval(interval);
  }, []);

  const updateQuote = () => {
    const now = new Date();
    const hour = now.getHours();
    const quote = getQuoteByHour(hour);
    
    let hourLabel = '';
    if (hour >= 6 && hour < 9) {
      hourLabel = 'Sabah';
    } else if (hour >= 12 && hour < 14) {
      hourLabel = 'Öğlen';
    } else if (hour >= 15 && hour < 17) {
      hourLabel = 'Öğleden Sonra';
    } else if (hour >= 18 && hour < 21) {
      hourLabel = 'Akşam';
    } else {
      hourLabel = 'Gece';
    }

    setCurrentQuote(quote);
    setCurrentHour(hourLabel);
  };

  useEffect(() => {
    const quotes: Quote[] = [
      { text: 'Sabah motivasyonu (06:00-09:00)', hour: 'Sabah' },
      ...motivationalQuotes.slice(0, 7).map(text => ({ text, hour: 'Sabah' })),
      { text: 'Öğlen motivasyonu (12:00-14:00)', hour: 'Öğlen' },
      ...motivationalQuotes.slice(7, 14).map(text => ({ text, hour: 'Öğlen' })),
      { text: 'Öğleden sonra motivasyonu (15:00-17:00)', hour: 'Öğleden Sonra' },
      ...motivationalQuotes.slice(14, 21).map(text => ({ text, hour: 'Öğleden Sonra' })),
      { text: 'Akşam motivasyonu (18:00-21:00)', hour: 'Akşam' },
      ...motivationalQuotes.slice(21, 28).map(text => ({ text, hour: 'Akşam' })),
      { text: 'Gece motivasyonu (21:00-23:59)', hour: 'Gece' },
      ...motivationalQuotes.slice(28).map(text => ({ text, hour: 'Gece' })),
    ];
    setAllQuotes(quotes);
  }, []);

  const getEmojiForHour = (hour: string) => {
    switch (hour) {
      case 'Sabah':
        return '🌅';
      case 'Öğlen':
        return '☀️';
      case 'Öğleden Sonra':
        return '🌤️';
      case 'Akşam':
        return '🌆';
      case 'Gece':
        return '🌙';
      default:
        return '💪';
    }
  };

  const renderQuoteItem = ({ item }: { item: Quote }) => {
    const isHeader = item.text.includes('motivasyonu');
    return (
      <View
        style={[
          styles.quoteItem,
          isHeader && styles.quoteHeader,
        ]}
      >
        <ThemedText
          style={[
            styles.quoteText,
            isHeader && styles.headerText,
          ]}
        >
          {isHeader ? `${getEmojiForHour(item.hour)} ${item.text}` : `• ${item.text}`}
        </ThemedText>
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            💪 Motivasyon Sözleri
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Gün boyu seni motive etmek için hazırlanmış sözler
          </ThemedText>
        </View>

        <View style={styles.currentQuoteSection}>
          <ThemedText style={styles.currentHourLabel}>
            {getEmojiForHour(currentHour)} {currentHour} Motivasyonu
          </ThemedText>
          <View style={styles.quoteCard}>
            <ThemedText style={styles.currentQuote}>
              &quot;{currentQuote}&quot;
            </ThemedText>
          </View>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={updateQuote}
          >
            <ThemedText style={styles.refreshButtonText}>
              🔄 Yeni Söz Göster
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.allQuotesSection}>
          <ThemedText style={styles.sectionTitle}>
            Tüm Motivasyon Sözleri
          </ThemedText>
          <FlatList
            data={allQuotes}
            renderItem={renderQuoteItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.infoSection}>
          <ThemedText style={styles.infoTitle}>📱 Bildirim Saatleri</ThemedText>
          <View style={styles.infoContent}>
            <ThemedText style={styles.infoText}>🌅 Sabah: 06:30</ThemedText>
            <ThemedText style={styles.infoText}>☀️ Öğlen: 12:00</ThemedText>
            <ThemedText style={styles.infoText}>🌤️ Öğleden Sonra: 15:30</ThemedText>
            <ThemedText style={styles.infoText}>🌆 Akşam: 18:00</ThemedText>
            <ThemedText style={styles.infoText}>🌙 Gece: 21:00</ThemedText>
          </View>
          <ThemedText style={styles.infoDescription}>
            Uygulama her gün bu saatlerde sana motivasyon sözleri gönderecek. Bildirimleri açık tutmayı unutma!
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  currentQuoteSection: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  currentHourLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#FF6B6B',
  },
  quoteCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  currentQuote: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#333',
  },
  refreshButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  refreshButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  allQuotesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  quoteItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  quoteHeader: {
    backgroundColor: '#FFE0B2',
    marginTop: 12,
    paddingVertical: 12,
    fontWeight: '600',
  },
  quoteText: {
    fontSize: 13,
    lineHeight: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E65100',
  },
  infoSection: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2E7D32',
  },
  infoContent: {
    marginBottom: 12,
  },
  infoText: {
    fontSize: 13,
    marginBottom: 8,
    color: '#1B5E20',
  },
  infoDescription: {
    fontSize: 12,
    opacity: 0.8,
    lineHeight: 18,
    color: '#1B5E20',
  },
});
