import type { DefineComponent } from 'vue';

export interface ChatClockTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockTall: DefineComponent<ChatClockTallProps>;

export default ChatClockTall;
export { ChatClockTall };
