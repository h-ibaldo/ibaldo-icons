import type { DefineComponent } from 'vue';

export interface ChatTypingTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingTall: DefineComponent<ChatTypingTallProps>;

export default ChatTypingTall;
export { ChatTypingTall };
