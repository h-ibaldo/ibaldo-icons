import type { DefineComponent } from 'vue';

export interface ChatTextOffSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffSharp: DefineComponent<ChatTextOffSharpProps>;

export default ChatTextOffSharp;
export { ChatTextOffSharp };
