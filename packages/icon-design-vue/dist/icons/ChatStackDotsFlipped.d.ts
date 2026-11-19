import type { DefineComponent } from 'vue';

export interface ChatStackDotsFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsFlipped: DefineComponent<ChatStackDotsFlippedProps>;

export default ChatStackDotsFlipped;
export { ChatStackDotsFlipped };
