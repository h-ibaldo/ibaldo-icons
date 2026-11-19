import type { DefineComponent } from 'vue';

export interface ChatStackClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClock: DefineComponent<ChatStackClockProps>;

export default ChatStackClock;
export { ChatStackClock };
