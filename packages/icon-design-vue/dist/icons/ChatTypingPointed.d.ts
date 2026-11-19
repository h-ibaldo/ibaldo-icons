import type { DefineComponent } from 'vue';

export interface ChatTypingPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingPointed: DefineComponent<ChatTypingPointedProps>;

export default ChatTypingPointed;
export { ChatTypingPointed };
