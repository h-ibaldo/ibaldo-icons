import type { DefineComponent } from 'vue';

export interface ChatQuoteBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuoteBroken: DefineComponent<ChatQuoteBrokenProps>;

export default ChatQuoteBroken;
export { ChatQuoteBroken };
