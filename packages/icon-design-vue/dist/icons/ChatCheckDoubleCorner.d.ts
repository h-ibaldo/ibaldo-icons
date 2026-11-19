import type { DefineComponent } from 'vue';

export interface ChatCheckDoubleCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCorner: DefineComponent<ChatCheckDoubleCornerProps>;

export default ChatCheckDoubleCorner;
export { ChatCheckDoubleCorner };
