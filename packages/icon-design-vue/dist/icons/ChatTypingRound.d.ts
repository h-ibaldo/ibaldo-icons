import type { DefineComponent } from 'vue';

export interface ChatTypingRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingRound: DefineComponent<ChatTypingRoundProps>;

export default ChatTypingRound;
export { ChatTypingRound };
