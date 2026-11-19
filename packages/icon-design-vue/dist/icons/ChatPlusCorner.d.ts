import type { DefineComponent } from 'vue';

export interface ChatPlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCorner: DefineComponent<ChatPlusCornerProps>;

export default ChatPlusCorner;
export { ChatPlusCorner };
