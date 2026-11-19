import type { DefineComponent } from 'vue';

export interface ChatImageSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageSlant: DefineComponent<ChatImageSlantProps>;

export default ChatImageSlant;
export { ChatImageSlant };
