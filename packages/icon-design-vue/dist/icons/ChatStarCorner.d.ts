import type { DefineComponent } from 'vue';

export interface ChatStarCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarCorner: DefineComponent<ChatStarCornerProps>;

export default ChatStarCorner;
export { ChatStarCorner };
