import type { DefineComponent } from 'vue';

export interface ChatReplyBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyBroken: DefineComponent<ChatReplyBrokenProps>;

export default ChatReplyBroken;
export { ChatReplyBroken };
