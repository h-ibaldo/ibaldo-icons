import type { DefineComponent } from 'vue';

export interface ChatForwardSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardSharp: DefineComponent<ChatForwardSharpProps>;

export default ChatForwardSharp;
export { ChatForwardSharp };
