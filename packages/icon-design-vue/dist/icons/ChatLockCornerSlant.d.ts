import type { DefineComponent } from 'vue';

export interface ChatLockCornerSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerSlant: DefineComponent<ChatLockCornerSlantProps>;

export default ChatLockCornerSlant;
export { ChatLockCornerSlant };
