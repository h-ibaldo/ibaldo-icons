import type { DefineComponent } from 'vue';

export interface ChatDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDots: DefineComponent<ChatDotsProps>;

export default ChatDots;
export { ChatDots };
