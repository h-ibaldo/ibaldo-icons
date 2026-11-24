import type { DefineComponent } from 'vue';

export interface ChatStackClockNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockNotch: DefineComponent<ChatStackClockNotchProps>;

export default ChatStackClockNotch;
export { ChatStackClockNotch };
