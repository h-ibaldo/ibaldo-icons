import type { DefineComponent } from 'vue';

export interface ChatReplySharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplySharp: DefineComponent<ChatReplySharpProps>;

export default ChatReplySharp;
export { ChatReplySharp };
