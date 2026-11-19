import type { DefineComponent } from 'vue';

export interface ChatVideoSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoSharp: DefineComponent<ChatVideoSharpProps>;

export default ChatVideoSharp;
export { ChatVideoSharp };
