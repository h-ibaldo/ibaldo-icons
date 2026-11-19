import type { DefineComponent } from 'vue';

export interface ChatLockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockSharp: DefineComponent<ChatLockSharpProps>;

export default ChatLockSharp;
export { ChatLockSharp };
