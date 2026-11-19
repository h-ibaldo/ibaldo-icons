import type { DefineComponent } from 'vue';

export interface ChatXDoubleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleRound: DefineComponent<ChatXDoubleRoundProps>;

export default ChatXDoubleRound;
export { ChatXDoubleRound };
