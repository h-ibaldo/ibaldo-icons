import type { DefineComponent } from 'vue';

export interface ChatDotsTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsTall: DefineComponent<ChatDotsTallProps>;

export default ChatDotsTall;
export { ChatDotsTall };
