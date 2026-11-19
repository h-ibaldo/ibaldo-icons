import type { DefineComponent } from 'vue';

export interface ChatDotsSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsSlant: DefineComponent<ChatDotsSlantProps>;

export default ChatDotsSlant;
export { ChatDotsSlant };
