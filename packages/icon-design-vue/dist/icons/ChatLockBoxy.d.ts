import type { DefineComponent } from 'vue';

export interface ChatLockBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockBoxy: DefineComponent<ChatLockBoxyProps>;

export default ChatLockBoxy;
export { ChatLockBoxy };
