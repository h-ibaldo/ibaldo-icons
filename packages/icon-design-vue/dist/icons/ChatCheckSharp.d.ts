import type { DefineComponent } from 'vue';

export interface ChatCheckSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckSharp: DefineComponent<ChatCheckSharpProps>;

export default ChatCheckSharp;
export { ChatCheckSharp };
