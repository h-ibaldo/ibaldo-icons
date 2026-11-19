import type { DefineComponent } from 'vue';

export interface ChatDollarSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarSlant: DefineComponent<ChatDollarSlantProps>;

export default ChatDollarSlant;
export { ChatDollarSlant };
