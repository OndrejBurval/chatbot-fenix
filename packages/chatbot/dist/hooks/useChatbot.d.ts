import { Message } from '../types';

export interface ChatbotCallbacks {
    onSendStart?: () => void;
    onSendSuccess?: (message: string, response: string) => void;
    onSendError?: (message: string, error: any) => void;
    generateResponse?: (message: string) => Promise<string>;
}
export interface UseChatbotProps {
    initialMessages?: Message[];
    callbacks?: ChatbotCallbacks;
}
export declare const useChatbot: ({ initialMessages, callbacks }: UseChatbotProps) => {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (content: string) => Promise<void>;
};
