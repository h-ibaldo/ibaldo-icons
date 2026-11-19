import type { DefineComponent } from 'vue';

export interface ChatUnderlineSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineSlant: DefineComponent<ChatUnderlineSlantProps>;

export default ChatUnderlineSlant;
export { ChatUnderlineSlant };
