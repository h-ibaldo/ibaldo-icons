import type { DefineComponent } from 'vue';

export interface ChatMinusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusTall: DefineComponent<ChatMinusTallProps>;

export default ChatMinusTall;
export { ChatMinusTall };
