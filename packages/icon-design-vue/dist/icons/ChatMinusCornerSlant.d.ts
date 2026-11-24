import type { DefineComponent } from 'vue';

export interface ChatMinusCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerSlant: DefineComponent<ChatMinusCornerSlantProps>;

export default ChatMinusCornerSlant;
export { ChatMinusCornerSlant };
