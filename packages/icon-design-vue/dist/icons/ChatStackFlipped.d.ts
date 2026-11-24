import type { DefineComponent } from 'vue';

export interface ChatStackFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackFlipped: DefineComponent<ChatStackFlippedProps>;

export default ChatStackFlipped;
export { ChatStackFlipped };
