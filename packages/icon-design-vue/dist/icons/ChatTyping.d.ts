import type { DefineComponent } from 'vue';

export interface ChatTypingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTyping: DefineComponent<ChatTypingProps>;

export default ChatTyping;
export { ChatTyping };
