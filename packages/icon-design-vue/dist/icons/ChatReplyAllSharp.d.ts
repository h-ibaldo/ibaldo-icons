import type { DefineComponent } from 'vue';

export interface ChatReplyAllSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllSharp: DefineComponent<ChatReplyAllSharpProps>;

export default ChatReplyAllSharp;
export { ChatReplyAllSharp };
