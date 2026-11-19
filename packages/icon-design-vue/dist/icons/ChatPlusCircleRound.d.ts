import type { DefineComponent } from 'vue';

export interface ChatPlusCircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleRound: DefineComponent<ChatPlusCircleRoundProps>;

export default ChatPlusCircleRound;
export { ChatPlusCircleRound };
