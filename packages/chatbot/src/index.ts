import { ChatContainer } from '@/components/ChatContainer';
import { Message, ChatbotCallbacks } from '@/types';
import { useMessages, useInput, useTheme, useChatbot } from '@/hooks';

export { ChatContainer, useMessages, useInput, useTheme, useChatbot };
export type { Message, ChatbotCallbacks };

export default ChatContainer;
