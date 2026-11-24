import type { DefineComponent } from 'vue';

export interface ChatStackLockCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLockCorner: DefineComponent<ChatStackLockCornerProps>;

export default ChatStackLockCorner;
export { ChatStackLockCorner };
