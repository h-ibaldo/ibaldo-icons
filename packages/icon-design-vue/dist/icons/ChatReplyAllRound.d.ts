import type { DefineComponent } from 'vue';

export interface ChatReplyAllRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllRound: DefineComponent<ChatReplyAllRoundProps>;

export default ChatReplyAllRound;
export { ChatReplyAllRound };
