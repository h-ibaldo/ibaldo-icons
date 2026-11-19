import type { DefineComponent } from 'vue';

export interface ChatHeartSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartSharp: DefineComponent<ChatHeartSharpProps>;

export default ChatHeartSharp;
export { ChatHeartSharp };
