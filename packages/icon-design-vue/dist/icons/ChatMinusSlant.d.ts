import type { DefineComponent } from 'vue';

export interface ChatMinusSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusSlant: DefineComponent<ChatMinusSlantProps>;

export default ChatMinusSlant;
export { ChatMinusSlant };
