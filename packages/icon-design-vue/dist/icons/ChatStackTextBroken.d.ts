import type { DefineComponent } from 'vue';

export interface ChatStackTextBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextBroken: DefineComponent<ChatStackTextBrokenProps>;

export default ChatStackTextBroken;
export { ChatStackTextBroken };
