import type { DefineComponent } from 'vue';

export interface ChatReplyRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyRound: DefineComponent<ChatReplyRoundProps>;

export default ChatReplyRound;
export { ChatReplyRound };
