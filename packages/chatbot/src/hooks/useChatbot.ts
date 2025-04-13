import { useState, useCallback } from 'react';
import { Message } from '@/types';

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

export const useChatbot = ({
  initialMessages = [],
  callbacks = {}
}: UseChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Default response generator
  const defaultResponseGenerator = async (message: string): Promise<string> => {
    // Simple delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `You said: "${message}". This is a default response as no custom response generator was provided.`;
  };

  // Use provided response generator or default
  const responseGenerator = callbacks.generateResponse || defaultResponseGenerator;

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message to state
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Call onSendStart callback
    callbacks?.onSendStart?.();

    setIsLoading(true);

    try {
      // Get response from provided generator or default
      const responseText = await responseGenerator(content);

      // Create bot message
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      // Add bot message to state
      setMessages(prevMessages => [...prevMessages, botMessage]);

      // Call onSendSuccess callback
      callbacks?.onSendSuccess?.(content, responseText);
    } catch (error) {
      console.error('Error generating response:', error);

      // Call onSendError callback
      callbacks?.onSendError?.(content, error);
    } finally {
      setIsLoading(false);
    }
  }, [callbacks, responseGenerator]);

  return {
    messages,
    isLoading,
    sendMessage
  };
};
