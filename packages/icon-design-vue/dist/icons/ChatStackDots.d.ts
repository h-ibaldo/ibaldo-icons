import type { DefineComponent } from 'vue';

export interface ChatStackDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDots: DefineComponent<ChatStackDotsProps>;

export default ChatStackDots;
export { ChatStackDots };
