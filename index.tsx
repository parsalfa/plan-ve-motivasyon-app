import { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  saveDailyPlan,
  getDailyPlans,
  markPlanAsCompleted,
  deletePlan,
  schedulePlanNotification,
} from '@/services/notificationService';

interface Plan {
  id: string;
  plan: string;
  time: string;
  date: string;
  completed: boolean;
  createdAt: string;
}

export default function HomeScreen() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [newPlan, setNewPlan] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [loading, setLoading] = useState(false);

  // Planları yükle
  useFocusEffect(
    useCallback(() => {
      loadPlans();
    }, [])
  );

  const loadPlans = async () => {
    try {
      setLoading(true);
      const loadedPlans = await getDailyPlans();
      setPlans(loadedPlans.sort((a: Plan, b: Plan) => a.time.localeCompare(b.time)));
    } catch {
      Alert.alert('Hata', 'Planlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlan = async () => {
    if (!newPlan.trim()) {
      Alert.alert('Uyarı', 'Lütfen bir plan girin');
      return;
    }

    try {
      setLoading(true);
      await saveDailyPlan(newPlan, selectedTime);
      await schedulePlanNotification(selectedTime, newPlan);
      setNewPlan('');
      setSelectedTime('09:00');
      await loadPlans();
      Alert.alert('Başarılı', 'Plan eklendi ve bildirim zamanlandı');
    } catch {
      Alert.alert('Hata', 'Plan eklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleCompletePlan = async (planId: string) => {
    try {
      await markPlanAsCompleted(planId);
      await loadPlans();
    } catch {
      Alert.alert('Hata', 'Plan tamamlanırken hata oluştu');
    }
  };

  const handleDeletePlan = async (planId: string) => {
    Alert.alert('Sil', 'Bu planı silmek istediğinize emin misiniz?', [
      { text: 'İptal', onPress: () => {} },
      {
        text: 'Sil',
        onPress: async () => {
          try {
            await deletePlan(planId);
            await loadPlans();
            Alert.alert('Başarılı', 'Plan silindi');
          } catch {
            Alert.alert('Hata', 'Plan silinirken hata oluştu');
          }
        },
      },
    ]);
  };

  const timeSlots = [
    '06:00', '07:00', '08:00', '09:00', '10:00',
    '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00',
    '21:00', '22:00', '23:00',
  ];

  const renderPlanItem = ({ item }: { item: Plan }) => (
    <View style={[styles.planItem, item.completed && styles.completedPlan]}>
      <View style={styles.planContent}>
        <ThemedText style={[styles.planTime, item.completed && styles.completedText]}>
          ⏰ {item.time}
        </ThemedText>
        <ThemedText
          style={[styles.planText, item.completed && styles.completedText]}
          numberOfLines={2}
        >
          {item.plan}
        </ThemedText>
      </View>
      <View style={styles.planActions}>
        <TouchableOpacity
          style={[styles.actionBtn, item.completed && styles.completedBtn]}
          onPress={() => handleCompletePlan(item.id)}
        >
          <ThemedText style={styles.actionBtnText}>
            {item.completed ? '✓' : '○'}
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, styles.deleteBtn]}
          onPress={() => handleDeletePlan(item.id)}
        >
          <ThemedText style={styles.actionBtnText}>🗑</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            📋 Günlük Planlar
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Bugün yapacağın görevleri ekle ve zamanında bildirim al
          </ThemedText>
        </View>

        <View style={styles.inputSection}>
          <ThemedText style={styles.label}>Yapılacak İş</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Örn: Tester takım çantası hazırla"
            placeholderTextColor="#999"
            value={newPlan}
            onChangeText={setNewPlan}
            multiline
            maxLength={100}
          />

          <ThemedText style={styles.label}>Bildirim Saati</ThemedText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.timeSelector}
          >
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeButton,
                  selectedTime === time && styles.timeButtonActive,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <ThemedText
                  style={[
                    styles.timeButtonText,
                    selectedTime === time && styles.timeButtonTextActive,
                  ]}
                >
                  {time}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={[styles.addButton, loading && styles.addButtonDisabled]}
            onPress={handleAddPlan}
            disabled={loading}
          >
            <ThemedText style={styles.addButtonText}>
              {loading ? 'Ekleniyor...' : '➕ Plan Ekle'}
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.plansSection}>
          <ThemedText style={styles.sectionTitle}>
            Bugünün Planları ({plans.length})
          </ThemedText>
          {plans.length === 0 ? (
            <View style={styles.emptyState}>
              <ThemedText style={styles.emptyStateText}>
                Henüz plan eklenmedi. Yukarıdan plan ekleyin!
              </ThemedText>
            </View>
          ) : (
            <FlatList
              data={plans}
              renderItem={renderPlanItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
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
  inputSection: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    minHeight: 60,
    textAlignVertical: 'top',
  },
  timeSelector: {
    marginVertical: 12,
  },
  timeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: '#f5f5f5',
  },
  timeButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  timeButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  timeButtonTextActive: {
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  addButtonDisabled: {
    opacity: 0.6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  plansSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  planItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  completedPlan: {
    backgroundColor: '#f0f0f0',
    borderLeftColor: '#999',
    opacity: 0.7,
  },
  planContent: {
    flex: 1,
  },
  planTime: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 4,
  },
  planText: {
    fontSize: 14,
    fontWeight: '500',
  },
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  planActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedBtn: {
    backgroundColor: '#c8e6c9',
  },
  deleteBtn: {
    backgroundColor: '#ffebee',
  },
  actionBtnText: {
    fontSize: 16,
  },
  separator: {
    height: 8,
  },
  emptyState: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
});
