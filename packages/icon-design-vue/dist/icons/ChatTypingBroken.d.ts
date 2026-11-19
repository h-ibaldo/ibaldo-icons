import type { DefineComponent } from 'vue';

export interface ChatTypingBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingBroken: DefineComponent<ChatTypingBrokenProps>;

export default ChatTypingBroken;
export { ChatTypingBroken };
