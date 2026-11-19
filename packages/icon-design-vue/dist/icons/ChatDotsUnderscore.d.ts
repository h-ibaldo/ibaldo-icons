import type { DefineComponent } from 'vue';

export interface ChatDotsUnderscoreProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscore: DefineComponent<ChatDotsUnderscoreProps>;

export default ChatDotsUnderscore;
export { ChatDotsUnderscore };
