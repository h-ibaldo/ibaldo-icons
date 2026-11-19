import type { DefineComponent } from 'vue';

export interface ChatXCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleRound: DefineComponent<ChatXCircleRoundProps>;

export default ChatXCircleRound;
export { ChatXCircleRound };
