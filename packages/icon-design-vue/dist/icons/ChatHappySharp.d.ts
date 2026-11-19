import type { DefineComponent } from 'vue';

export interface ChatHappySharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappySharp: DefineComponent<ChatHappySharpProps>;

export default ChatHappySharp;
export { ChatHappySharp };
