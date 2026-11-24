import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineSlant: DefineComponent<ChatStackUnderlineSlantProps>;

export default ChatStackUnderlineSlant;
export { ChatStackUnderlineSlant };
