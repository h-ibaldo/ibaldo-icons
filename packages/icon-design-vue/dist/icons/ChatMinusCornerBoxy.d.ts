import type { DefineComponent } from 'vue';

export interface ChatMinusCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerBoxy: DefineComponent<ChatMinusCornerBoxyProps>;

export default ChatMinusCornerBoxy;
export { ChatMinusCornerBoxy };
