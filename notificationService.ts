import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getQuoteByHour } from '../constants/motivationalQuotes';

const NOTIFICATION_TASK = 'DAILY_NOTIFICATION_TASK';
const PLAN_STORAGE_KEY = 'daily_plans';
const NOTIFICATION_TIMES_KEY = 'notification_times';

// Bildirim ayarlarını yapılandır
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const initializeNotifications = async () => {
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Bildirim izni reddedildi');
      return false;
    }
    return true;
  } catch (error) {
    console.error('Bildirim başlatma hatası:', error);
    return false;
  }
};

export const schedulePlanNotification = async (
  time: string,
  plan: string,
  notificationId?: string
) => {
  try {
    const [hours, minutes] = time.split(':').map(Number);
    
    // Bugün için bildirimi zamanla
    const trigger = new Date();
    trigger.setHours(hours, minutes, 0);
    
    // Eğer zaman geçmişse, yarın için zamanla
    if (trigger < new Date()) {
      trigger.setDate(trigger.getDate() + 1);
    }

    const notifId = await Notifications.scheduleNotificationAsync({
      content: {
        title: '📋 Plan Hatırlatıcı',
        body: plan,
        sound: 'default',
        badge: 1,
      },
      trigger,
    });

    // Bildirimleri depolama alanına kaydet
    const savedNotifications = await AsyncStorage.getItem(NOTIFICATION_TIMES_KEY);
    const notifications = savedNotifications ? JSON.parse(savedNotifications) : [];
    
    notifications.push({
      id: notifId,
      time,
      plan,
      createdAt: new Date().toISOString(),
    });

    await AsyncStorage.setItem(NOTIFICATION_TIMES_KEY, JSON.stringify(notifications));
    
    return notifId;
  } catch (error) {
    console.error('Plan bildirimi zamanla hatası:', error);
    throw error;
  }
};

export const scheduleMotivationNotifications = async () => {
  try {
    // Motivasyon bildirimleri için saatler
    const motivationTimes = [
      { hour: 6, minute: 30 },   // Sabah
      { hour: 12, minute: 0 },   // Öğlen
      { hour: 15, minute: 30 },  // Öğleden sonra
      { hour: 18, minute: 0 },   // Akşam
      { hour: 21, minute: 0 },   // Gece
    ];

    for (const time of motivationTimes) {
      const trigger = new Date();
      trigger.setHours(time.hour, time.minute, 0);

      // Eğer zaman geçmişse, yarın için zamanla
      if (trigger < new Date()) {
        trigger.setDate(trigger.getDate() + 1);
      }

      const quote = getQuoteByHour(time.hour);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: '💪 Motivasyon Sözü',
          body: quote,
          sound: 'default',
          badge: 1,
        },
        trigger,
      });
    }
  } catch (error) {
    console.error('Motivasyon bildirimleri zamanla hatası:', error);
    throw error;
  }
};

export const saveDailyPlan = async (plan: string, time: string) => {
  try {
    const savedPlans = await AsyncStorage.getItem(PLAN_STORAGE_KEY);
    const plans = savedPlans ? JSON.parse(savedPlans) : [];
    
    const today = new Date().toISOString().split('T')[0];
    
    plans.push({
      id: Date.now().toString(),
      plan,
      time,
      date: today,
      completed: false,
      createdAt: new Date().toISOString(),
    });

    await AsyncStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plans));
    return plans;
  } catch (error) {
    console.error('Plan kaydetme hatası:', error);
    throw error;
  }
};

export const getDailyPlans = async () => {
  try {
    const savedPlans = await AsyncStorage.getItem(PLAN_STORAGE_KEY);
    const plans = savedPlans ? JSON.parse(savedPlans) : [];
    
    const today = new Date().toISOString().split('T')[0];
    return plans.filter((plan: any) => plan.date === today);
  } catch (error) {
    console.error('Plan alma hatası:', error);
    return [];
  }
};

export const markPlanAsCompleted = async (planId: string) => {
  try {
    const savedPlans = await AsyncStorage.getItem(PLAN_STORAGE_KEY);
    const plans = savedPlans ? JSON.parse(savedPlans) : [];
    
    const updatedPlans = plans.map((plan: any) =>
      plan.id === planId ? { ...plan, completed: true } : plan
    );

    await AsyncStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(updatedPlans));
    return updatedPlans;
  } catch (error) {
    console.error('Plan tamamlama hatası:', error);
    throw error;
  }
};

export const deletePlan = async (planId: string) => {
  try {
    const savedPlans = await AsyncStorage.getItem(PLAN_STORAGE_KEY);
    const plans = savedPlans ? JSON.parse(savedPlans) : [];
    
    const updatedPlans = plans.filter((plan: any) => plan.id !== planId);

    await AsyncStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(updatedPlans));
    return updatedPlans;
  } catch (error) {
    console.error('Plan silme hatası:', error);
    throw error;
  }
};

export const cancelNotification = async (notificationId: string) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  } catch (error) {
    console.error('Bildirimi iptal etme hatası:', error);
    throw error;
  }
};

export const getAllScheduledNotifications = async () => {
  try {
    return await Notifications.getAllScheduledNotificationsAsync();
  } catch (error) {
    console.error('Zamanlanmış bildirimleri alma hatası:', error);
    return [];
  }
};
