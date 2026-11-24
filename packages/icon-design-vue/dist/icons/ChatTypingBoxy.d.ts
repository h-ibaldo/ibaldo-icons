import type { DefineComponent } from 'vue';

export interface ChatTypingBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingBoxy: DefineComponent<ChatTypingBoxyProps>;

export default ChatTypingBoxy;
export { ChatTypingBoxy };
