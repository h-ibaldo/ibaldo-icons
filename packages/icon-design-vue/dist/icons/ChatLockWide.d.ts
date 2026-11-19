import type { DefineComponent } from 'vue';

export interface ChatLockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockWide: DefineComponent<ChatLockWideProps>;

export default ChatLockWide;
export { ChatLockWide };
