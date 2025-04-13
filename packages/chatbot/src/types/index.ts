export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatbotCallbacks {
  onSendStart?: () => void;
  onSendSuccess?: (message: string, response: string) => void;
  onSendError?: (message: string, error: any) => void;
  generateResponse?: (message: string) => Promise<string>;
}

export interface ChatbotProps {
  initialMessages?: Message[];
  botName?: string;
  botAvatar?: string;
  userAvatar?: string;
  placeholder?: string;
  theme?: {
    primaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
  };
  callbacks?: ChatbotCallbacks;
}

export interface MessageListProps {
  messages: Message[];
  botName?: string;
  botAvatar?: string;
  userAvatar?: string;
}

export interface MessageItemProps {
  message: Message;
  botName?: string;
  botAvatar?: string;
  userAvatar?: string;
}

export interface InputAreaProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

export interface HeaderProps {
  botName?: string;
  botAvatar?: string;
}
