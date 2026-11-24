import type { DefineComponent } from 'vue';

export interface ChatForwardRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardRound: DefineComponent<ChatForwardRoundProps>;

export default ChatForwardRound;
export { ChatForwardRound };
