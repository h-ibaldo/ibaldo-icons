import type { DefineComponent } from 'vue';

export interface ChatHashSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashSharp: DefineComponent<ChatHashSharpProps>;

export default ChatHashSharp;
export { ChatHashSharp };
