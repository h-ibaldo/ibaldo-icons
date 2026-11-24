import type { DefineComponent } from 'vue';

export interface ChatStackTypingBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingBoxy: DefineComponent<ChatStackTypingBoxyProps>;

export default ChatStackTypingBoxy;
export { ChatStackTypingBoxy };
