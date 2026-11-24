import type { DefineComponent } from 'vue';

export interface ChatTextRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextRound: DefineComponent<ChatTextRoundProps>;

export default ChatTextRound;
export { ChatTextRound };
