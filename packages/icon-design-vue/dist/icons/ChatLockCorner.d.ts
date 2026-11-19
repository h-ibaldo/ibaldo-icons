import type { DefineComponent } from 'vue';

export interface ChatLockCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCorner: DefineComponent<ChatLockCornerProps>;

export default ChatLockCorner;
export { ChatLockCorner };
