import type { DefineComponent } from 'vue';

export interface ChatWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarning: DefineComponent<ChatWarningProps>;

export default ChatWarning;
export { ChatWarning };
