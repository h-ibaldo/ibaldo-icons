import type { DefineComponent } from 'vue';

export interface ChatForwardCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerRound: DefineComponent<ChatForwardCornerRoundProps>;

export default ChatForwardCornerRound;
export { ChatForwardCornerRound };
