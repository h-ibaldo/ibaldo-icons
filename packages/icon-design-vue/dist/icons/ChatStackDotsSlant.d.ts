import type { DefineComponent } from 'vue';

export interface ChatStackDotsSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsSlant: DefineComponent<ChatStackDotsSlantProps>;

export default ChatStackDotsSlant;
export { ChatStackDotsSlant };
