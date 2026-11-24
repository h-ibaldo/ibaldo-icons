import type { DefineComponent } from 'vue';

export interface ChatTextSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextSharp: DefineComponent<ChatTextSharpProps>;

export default ChatTextSharp;
export { ChatTextSharp };
