import type { DefineComponent } from 'vue';

export interface ChatSearchSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchSharp: DefineComponent<ChatSearchSharpProps>;

export default ChatSearchSharp;
export { ChatSearchSharp };
