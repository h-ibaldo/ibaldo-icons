import type { DefineComponent } from 'vue';

export interface ChatLockCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerBoxy: DefineComponent<ChatLockCornerBoxyProps>;

export default ChatLockCornerBoxy;
export { ChatLockCornerBoxy };
