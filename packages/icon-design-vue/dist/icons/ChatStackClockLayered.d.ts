import type { DefineComponent } from 'vue';

export interface ChatStackClockLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockLayered: DefineComponent<ChatStackClockLayeredProps>;

export default ChatStackClockLayered;
export { ChatStackClockLayered };
