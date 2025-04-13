import { useState, useCallback } from 'react';
import { Message } from '@/types';

interface UseMessagesProps {
  initialMessages?: Message[];
  onSendMessage?: (message: string) => Promise<void>;
}

export const useMessages = ({
  initialMessages = [],
  onSendMessage
}: UseMessagesProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message to state
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    if (onSendMessage) {
      setIsLoading(true);
      try {
        await onSendMessage(content);
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [onSendMessage]);

  return {
    messages,
    isLoading,
    handleSendMessage
  };
};
