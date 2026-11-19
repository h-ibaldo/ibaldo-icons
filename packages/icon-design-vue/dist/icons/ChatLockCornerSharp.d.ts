import type { DefineComponent } from 'vue';

export interface ChatLockCornerSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerSharp: DefineComponent<ChatLockCornerSharpProps>;

export default ChatLockCornerSharp;
export { ChatLockCornerSharp };
