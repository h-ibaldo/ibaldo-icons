import type { DefineComponent } from 'vue';

export interface ChatCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCorner: DefineComponent<ChatCheckCornerProps>;

export default ChatCheckCorner;
export { ChatCheckCorner };
