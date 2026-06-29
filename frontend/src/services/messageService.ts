import { Conversation, Message } from '@/types/studentPortal';

const DEFAULT_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv1',
    participantName: 'Dr. Vivek Mishra',
    participantAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    participantRole: 'Academic Coordinator',
    online: true,
    unreadCount: 1,
    lastMessageText: 'The sensory testbed is ready. Please drop by the lab in the afternoon.',
    lastMessageTime: '10:45 AM'
  },
  {
    id: 'conv2',
    participantName: 'Amit Saxena',
    participantAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    participantRole: 'Industry SPOC (TATA)',
    online: false,
    unreadCount: 0,
    lastMessageText: 'Send over the database index schematic once you draft the revision.',
    lastMessageTime: 'Yesterday'
  }
];

const DEFAULT_MESSAGES: Record<string, Message[]> = {
  conv1: [
    {
      id: 'm1_1',
      senderId: 'coord-1',
      senderName: 'Dr. Vivek Mishra',
      senderAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
      text: 'Hello Madhavan, have you finalized the wiring diagram for the ESP32 node?',
      createdAt: '2026-06-28T09:15:00Z',
      isMe: false
    },
    {
      id: 'm1_2',
      senderId: 'dev-user-id',
      senderName: 'Madhavan Singh',
      text: 'Yes, Dr. Mishra. I mapped it to GPIO 32 and 33 for the moisture sensors. I uploaded it in version 1.',
      createdAt: '2026-06-28T09:20:00Z',
      isMe: true
    },
    {
      id: 'm1_3',
      senderId: 'coord-1',
      senderName: 'Dr. Vivek Mishra',
      senderAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
      text: 'The sensory testbed is ready. Please drop by the lab in the afternoon.',
      createdAt: '2026-06-29T10:45:00Z',
      isMe: false
    }
  ],
  conv2: [
    {
      id: 'm2_1',
      senderId: 'spoc-1',
      senderName: 'Amit Saxena',
      senderAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'Welcome to the challenge, Madhavan. We are looking for lightweight clients that do not flood the MQTT broker.',
      createdAt: '2026-06-18T10:10:00Z',
      isMe: false
    },
    {
      id: 'm2_2',
      senderId: 'dev-user-id',
      senderName: 'Madhavan Singh',
      text: 'Understood. I added a debounce function on the clientside to only dispatch sensor writes when changes exceed 3%.',
      createdAt: '2026-06-18T10:20:00Z',
      isMe: true
    },
    {
      id: 'm2_3',
      senderId: 'spoc-1',
      senderName: 'Amit Saxena',
      senderAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      text: 'Send over the database index schematic once you draft the revision.',
      createdAt: '2026-06-28T16:00:00Z',
      isMe: false
    }
  ]
};

export class MessageService {
  private static getConversationsList(): Conversation[] {
    if (typeof window === 'undefined') return DEFAULT_CONVERSATIONS;
    const item = localStorage.getItem('ciisic_conversations');
    if (!item) {
      localStorage.setItem('ciisic_conversations', JSON.stringify(DEFAULT_CONVERSATIONS));
      return DEFAULT_CONVERSATIONS;
    }
    try {
      return JSON.parse(item);
    } catch {
      return DEFAULT_CONVERSATIONS;
    }
  }

  private static setConversationsList(list: Conversation[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_conversations', JSON.stringify(list));
    }
  }

  private static getMessagesMap(): Record<string, Message[]> {
    if (typeof window === 'undefined') return DEFAULT_MESSAGES;
    const item = localStorage.getItem('ciisic_messages');
    if (!item) {
      localStorage.setItem('ciisic_messages', JSON.stringify(DEFAULT_MESSAGES));
      return DEFAULT_MESSAGES;
    }
    try {
      return JSON.parse(item);
    } catch {
      return DEFAULT_MESSAGES;
    }
  }

  private static setMessagesMap(map: Record<string, Message[]>): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ciisic_messages', JSON.stringify(map));
    }
  }

  static async getConversations(): Promise<Conversation[]> {
    return this.getConversationsList();
  }

  static async getMessages(conversationId: string): Promise<Message[]> {
    const map = this.getMessagesMap();
    return map[conversationId] || [];
  }

  static async sendMessage(conversationId: string, text: string, file?: { name: string; url: string }): Promise<Message> {
    const map = this.getMessagesMap();
    const list = map[conversationId] || [];
    
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      senderId: 'dev-user-id',
      senderName: 'Madhavan Singh',
      text,
      fileUrl: file?.url,
      fileName: file?.name,
      createdAt: new Date().toISOString(),
      isMe: true
    };

    list.push(newMessage);
    map[conversationId] = list;
    this.setMessagesMap(map);

    // Update the conversation preview
    const convs = this.getConversationsList();
    const updatedConvs = convs.map(c => {
      if (c.id === conversationId) {
        return {
          ...c,
          lastMessageText: file ? `📎 Sent an attachment: ${file.name}` : text,
          lastMessageTime: 'Just Now',
          unreadCount: 0
        };
      }
      return c;
    });
    this.setConversationsList(updatedConvs);

    return newMessage;
  }

  static async markConversationRead(conversationId: string): Promise<void> {
    const convs = this.getConversationsList();
    const updatedConvs = convs.map(c => c.id === conversationId ? { ...c, unreadCount: 0 } : c);
    this.setConversationsList(updatedConvs);
  }
}
