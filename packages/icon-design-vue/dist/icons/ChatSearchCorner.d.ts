import type { DefineComponent } from 'vue';

export interface ChatSearchCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchCorner: DefineComponent<ChatSearchCornerProps>;

export default ChatSearchCorner;
export { ChatSearchCorner };
