import type { DefineComponent } from 'vue';

export interface ChatOffSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffSharp: DefineComponent<ChatOffSharpProps>;

export default ChatOffSharp;
export { ChatOffSharp };
