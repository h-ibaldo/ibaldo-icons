import type { DefineComponent } from 'vue';

export interface ChatPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusRound: DefineComponent<ChatPlusRoundProps>;

export default ChatPlusRound;
export { ChatPlusRound };
