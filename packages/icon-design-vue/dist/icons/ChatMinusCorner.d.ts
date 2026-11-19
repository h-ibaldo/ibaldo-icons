import type { DefineComponent } from 'vue';

export interface ChatMinusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCorner: DefineComponent<ChatMinusCornerProps>;

export default ChatMinusCorner;
export { ChatMinusCorner };
