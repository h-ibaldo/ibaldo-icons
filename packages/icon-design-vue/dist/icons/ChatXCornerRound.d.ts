import type { DefineComponent } from 'vue';

export interface ChatXCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerRound: DefineComponent<ChatXCornerRoundProps>;

export default ChatXCornerRound;
export { ChatXCornerRound };
