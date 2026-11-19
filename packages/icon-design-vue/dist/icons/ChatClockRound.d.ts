import type { DefineComponent } from 'vue';

export interface ChatClockRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockRound: DefineComponent<ChatClockRoundProps>;

export default ChatClockRound;
export { ChatClockRound };
