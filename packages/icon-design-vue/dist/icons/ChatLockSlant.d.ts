import type { DefineComponent } from 'vue';

export interface ChatLockSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockSlant: DefineComponent<ChatLockSlantProps>;

export default ChatLockSlant;
export { ChatLockSlant };
