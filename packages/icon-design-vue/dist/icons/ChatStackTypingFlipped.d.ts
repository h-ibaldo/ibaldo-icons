import type { DefineComponent } from 'vue';

export interface ChatStackTypingFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingFlipped: DefineComponent<ChatStackTypingFlippedProps>;

export default ChatStackTypingFlipped;
export { ChatStackTypingFlipped };
