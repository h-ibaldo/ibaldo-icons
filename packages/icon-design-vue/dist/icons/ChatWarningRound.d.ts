import type { DefineComponent } from 'vue';

export interface ChatWarningRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningRound: DefineComponent<ChatWarningRoundProps>;

export default ChatWarningRound;
export { ChatWarningRound };
