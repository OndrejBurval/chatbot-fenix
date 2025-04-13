export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}
export interface ChatbotProps {
    initialMessages?: Message[];
    botName?: string;
    botAvatar?: string;
    userAvatar?: string;
    placeholder?: string;
    onSendMessage?: (message: string) => Promise<void>;
    theme?: {
        primaryColor?: string;
        backgroundColor?: string;
        textColor?: string;
        fontFamily?: string;
    };
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
