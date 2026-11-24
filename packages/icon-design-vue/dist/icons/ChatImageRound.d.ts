import type { DefineComponent } from 'vue';

export interface ChatImageRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageRound: DefineComponent<ChatImageRoundProps>;

export default ChatImageRound;
export { ChatImageRound };
