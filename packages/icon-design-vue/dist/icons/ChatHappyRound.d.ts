import type { DefineComponent } from 'vue';

export interface ChatHappyRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappyRound: DefineComponent<ChatHappyRoundProps>;

export default ChatHappyRound;
export { ChatHappyRound };
