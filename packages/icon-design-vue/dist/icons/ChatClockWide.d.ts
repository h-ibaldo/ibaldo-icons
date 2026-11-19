import type { DefineComponent } from 'vue';

export interface ChatClockWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockWide: DefineComponent<ChatClockWideProps>;

export default ChatClockWide;
export { ChatClockWide };
