import type { DefineComponent } from 'vue';

export interface ChatRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatRound: DefineComponent<ChatRoundProps>;

export default ChatRound;
export { ChatRound };
