import type { DefineComponent } from 'vue';

export interface ChatXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXRound: DefineComponent<ChatXRoundProps>;

export default ChatXRound;
export { ChatXRound };
