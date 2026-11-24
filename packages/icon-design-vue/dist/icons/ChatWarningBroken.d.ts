import type { DefineComponent } from 'vue';

export interface ChatWarningBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningBroken: DefineComponent<ChatWarningBrokenProps>;

export default ChatWarningBroken;
export { ChatWarningBroken };
