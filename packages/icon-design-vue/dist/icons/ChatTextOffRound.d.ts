import type { DefineComponent } from 'vue';

export interface ChatTextOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffRound: DefineComponent<ChatTextOffRoundProps>;

export default ChatTextOffRound;
export { ChatTextOffRound };
