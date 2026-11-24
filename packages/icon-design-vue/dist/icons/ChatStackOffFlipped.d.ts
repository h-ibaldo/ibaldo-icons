import type { DefineComponent } from 'vue';

export interface ChatStackOffFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffFlipped: DefineComponent<ChatStackOffFlippedProps>;

export default ChatStackOffFlipped;
export { ChatStackOffFlipped };
