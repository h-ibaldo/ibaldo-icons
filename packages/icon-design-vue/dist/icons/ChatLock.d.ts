import type { DefineComponent } from 'vue';

export interface ChatLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLock: DefineComponent<ChatLockProps>;

export default ChatLock;
export { ChatLock };
