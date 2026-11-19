import type { DefineComponent } from 'vue';

export interface ChatStackSearchCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCorner: DefineComponent<ChatStackSearchCornerProps>;

export default ChatStackSearchCorner;
export { ChatStackSearchCorner };
