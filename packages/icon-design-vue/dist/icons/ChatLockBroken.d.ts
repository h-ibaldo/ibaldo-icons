import type { DefineComponent } from 'vue';

export interface ChatLockBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockBroken: DefineComponent<ChatLockBrokenProps>;

export default ChatLockBroken;
export { ChatLockBroken };
