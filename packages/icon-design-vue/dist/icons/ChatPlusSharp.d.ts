import type { DefineComponent } from 'vue';

export interface ChatPlusSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusSharp: DefineComponent<ChatPlusSharpProps>;

export default ChatPlusSharp;
export { ChatPlusSharp };
