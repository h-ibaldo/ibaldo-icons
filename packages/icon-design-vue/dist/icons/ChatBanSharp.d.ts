import type { DefineComponent } from 'vue';

export interface ChatBanSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanSharp: DefineComponent<ChatBanSharpProps>;

export default ChatBanSharp;
export { ChatBanSharp };
