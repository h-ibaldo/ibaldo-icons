import type { DefineComponent } from 'vue';

export interface ChatClockPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockPointed: DefineComponent<ChatClockPointedProps>;

export default ChatClockPointed;
export { ChatClockPointed };
