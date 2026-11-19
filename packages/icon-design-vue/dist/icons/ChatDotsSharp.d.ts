import type { DefineComponent } from 'vue';

export interface ChatDotsSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsSharp: DefineComponent<ChatDotsSharpProps>;

export default ChatDotsSharp;
export { ChatDotsSharp };
