import { Message } from '../types';

interface UseMessagesProps {
    initialMessages?: Message[];
    onSendMessage?: (message: string) => Promise<void>;
}
export declare const useMessages: ({ initialMessages, onSendMessage }: UseMessagesProps) => {
    messages: Message[];
    isLoading: boolean;
    handleSendMessage: (content: string) => Promise<void>;
};
export {};
