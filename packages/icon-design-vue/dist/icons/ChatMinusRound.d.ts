import type { DefineComponent } from 'vue';

export interface ChatMinusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusRound: DefineComponent<ChatMinusRoundProps>;

export default ChatMinusRound;
export { ChatMinusRound };
