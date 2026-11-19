import type { DefineComponent } from 'vue';

export interface ChatMinusCornerSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerSharp: DefineComponent<ChatMinusCornerSharpProps>;

export default ChatMinusCornerSharp;
export { ChatMinusCornerSharp };
