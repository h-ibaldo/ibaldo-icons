import type { DefineComponent } from 'vue';

export interface ChatDotsCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleRound: DefineComponent<ChatDotsCircleRoundProps>;

export default ChatDotsCircleRound;
export { ChatDotsCircleRound };
