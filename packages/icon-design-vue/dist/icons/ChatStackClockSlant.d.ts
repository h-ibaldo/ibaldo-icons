import type { DefineComponent } from 'vue';

export interface ChatStackClockSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockSlant: DefineComponent<ChatStackClockSlantProps>;

export default ChatStackClockSlant;
export { ChatStackClockSlant };
