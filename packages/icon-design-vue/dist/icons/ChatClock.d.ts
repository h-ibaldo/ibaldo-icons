import type { DefineComponent } from 'vue';

export interface ChatClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClock: DefineComponent<ChatClockProps>;

export default ChatClock;
export { ChatClock };
