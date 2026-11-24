import type { DefineComponent } from 'vue';

export interface ChatStackDotFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotFlipped: DefineComponent<ChatStackDotFlippedProps>;

export default ChatStackDotFlipped;
export { ChatStackDotFlipped };
