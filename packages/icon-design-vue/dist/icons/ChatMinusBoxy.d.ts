import type { DefineComponent } from 'vue';

export interface ChatMinusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusBoxy: DefineComponent<ChatMinusBoxyProps>;

export default ChatMinusBoxy;
export { ChatMinusBoxy };
