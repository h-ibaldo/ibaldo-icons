import type { DefineComponent } from 'vue';

export interface ChatTextBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextBroken: DefineComponent<ChatTextBrokenProps>;

export default ChatTextBroken;
export { ChatTextBroken };
