import type { DefineComponent } from 'vue';

export interface ChatMinusCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerRound: DefineComponent<ChatMinusCornerRoundProps>;

export default ChatMinusCornerRound;
export { ChatMinusCornerRound };
