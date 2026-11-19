import type { DefineComponent } from 'vue';

export interface ChatSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSharp: DefineComponent<ChatSharpProps>;

export default ChatSharp;
export { ChatSharp };
