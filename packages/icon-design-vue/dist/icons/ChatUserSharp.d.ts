import type { DefineComponent } from 'vue';

export interface ChatUserSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserSharp: DefineComponent<ChatUserSharpProps>;

export default ChatUserSharp;
export { ChatUserSharp };
