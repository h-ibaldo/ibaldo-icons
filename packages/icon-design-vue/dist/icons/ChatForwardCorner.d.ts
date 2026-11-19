import type { DefineComponent } from 'vue';

export interface ChatForwardCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardCorner: DefineComponent<ChatForwardCornerProps>;

export default ChatForwardCorner;
export { ChatForwardCorner };
