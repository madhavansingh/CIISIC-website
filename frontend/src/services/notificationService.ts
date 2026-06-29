import { Notification } from '@/types/studentPortal';

const DEFAULT_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    title: 'New Comment on Proposal',
    content: 'Amit Saxena (TATA AgriTech Solutions SPOC) posted a comment requesting database blueprints on "Smart Crop Scheduling & Soil Sensors IoT Hub".',
    type: 'MESSAGE',
    date: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    isRead: false
  },
  {
    id: 'n2',
    title: 'Challenge Recommended',
    content: 'A new challenge "SaaS Multi-Tenant Billing Gateway" was posted by Netlink Technologies, matching your React & Next.js skill sets.',
    type: 'CHALLENGE',
    date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    isRead: false
  },
  {
    id: 'n3',
    title: 'Proposal Status Update',
    content: 'Your proposal to "Smart Hydration Grid for Agro-Crops" was verified and approved by the LNCT Bhopal Excellence Cell.',
    type: 'PROPOSAL',
    date: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
    isRead: true
  },
  {
    id: 'n4',
    title: 'Achievement Unlocked',
    content: 'Congratulations! You unlocked the "MERN Specialist" gamified badge for verifying Node.js and React credentials.',
    type: 'SYSTEM',
    date: new Date(Date.now() - 4 * 86400000).toISOString(), // 4 days ago
    isRead: true
  }
];

export class NotificationService {
  private static getNotificationsList(): Notification[] {
    if (typeof window === 'undefined') return DEFAULT_NOTIFICATIONS;
    const item = localStorage.getItem('ciisic_notifications');
    if (!item) {
      localStorage.setItem('ciisic_notifications', JSON.stringify(DEFAULT_NOTIFICATIONS));
      return DEFAULT_NOTIFICATIONS;
    }
    try {
      return JSON.parse(item);
    } catch {
      return DEFAULT_NOTIFICATIONS;
    }
  }

  private static setNotificationsList(list: Notification[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_notifications', JSON.stringify(list));
    }
  }

  static async getNotifications(): Promise<Notification[]> {
    return this.getNotificationsList();
  }

  static async markAsRead(id: string): Promise<Notification[]> {
    const list = this.getNotificationsList();
    const updated = list.map(n => n.id === id ? { ...n, isRead: true } : n);
    this.setNotificationsList(updated);
    return updated;
  }

  static async markAllAsRead(): Promise<Notification[]> {
    const list = this.getNotificationsList();
    const updated = list.map(n => ({ ...n, isRead: true }));
    this.setNotificationsList(updated);
    return updated;
  }

  static async getUnreadCount(): Promise<number> {
    const list = this.getNotificationsList();
    return list.filter(n => !n.isRead).length;
  }
}
