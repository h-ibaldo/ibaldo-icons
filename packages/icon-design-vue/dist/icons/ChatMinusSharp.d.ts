import type { DefineComponent } from 'vue';

export interface ChatMinusSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusSharp: DefineComponent<ChatMinusSharpProps>;

export default ChatMinusSharp;
export { ChatMinusSharp };
