import type { DefineComponent } from 'vue';

export interface ChatVideoRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoRound: DefineComponent<ChatVideoRoundProps>;

export default ChatVideoRound;
export { ChatVideoRound };
