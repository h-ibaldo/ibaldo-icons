import type { DefineComponent } from 'vue';

export interface ChatDollarSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarSharp: DefineComponent<ChatDollarSharpProps>;

export default ChatDollarSharp;
export { ChatDollarSharp };
