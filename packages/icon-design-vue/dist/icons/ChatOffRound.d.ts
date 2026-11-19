import type { DefineComponent } from 'vue';

export interface ChatOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffRound: DefineComponent<ChatOffRoundProps>;

export default ChatOffRound;
export { ChatOffRound };
