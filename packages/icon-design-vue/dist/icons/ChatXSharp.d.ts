import type { DefineComponent } from 'vue';

export interface ChatXSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXSharp: DefineComponent<ChatXSharpProps>;

export default ChatXSharp;
export { ChatXSharp };
