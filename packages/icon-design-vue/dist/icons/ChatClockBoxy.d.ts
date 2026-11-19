import type { DefineComponent } from 'vue';

export interface ChatClockBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockBoxy: DefineComponent<ChatClockBoxyProps>;

export default ChatClockBoxy;
export { ChatClockBoxy };
