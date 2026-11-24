import type { DefineComponent } from 'vue';

export interface ChatClockSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockSlant: DefineComponent<ChatClockSlantProps>;

export default ChatClockSlant;
export { ChatClockSlant };
