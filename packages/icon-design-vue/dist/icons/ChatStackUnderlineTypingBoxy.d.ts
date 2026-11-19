import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineTypingBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTypingBoxy: DefineComponent<ChatStackUnderlineTypingBoxyProps>;

export default ChatStackUnderlineTypingBoxy;
export { ChatStackUnderlineTypingBoxy };
