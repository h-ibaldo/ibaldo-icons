import type { DefineComponent } from 'vue';

export interface ChatDotSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotSharp: DefineComponent<ChatDotSharpProps>;

export default ChatDotSharp;
export { ChatDotSharp };
