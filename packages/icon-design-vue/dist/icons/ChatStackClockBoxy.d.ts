import type { DefineComponent } from 'vue';

export interface ChatStackClockBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockBoxy: DefineComponent<ChatStackClockBoxyProps>;

export default ChatStackClockBoxy;
export { ChatStackClockBoxy };
