import type { DefineComponent } from 'vue';

export interface ChatTypingSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingSlant: DefineComponent<ChatTypingSlantProps>;

export default ChatTypingSlant;
export { ChatTypingSlant };
