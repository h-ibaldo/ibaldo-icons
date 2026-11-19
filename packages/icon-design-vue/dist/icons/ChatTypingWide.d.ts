import type { DefineComponent } from 'vue';

export interface ChatTypingWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingWide: DefineComponent<ChatTypingWideProps>;

export default ChatTypingWide;
export { ChatTypingWide };
