import type { DefineComponent } from 'vue';

export interface ChatWarningSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningSlant: DefineComponent<ChatWarningSlantProps>;

export default ChatWarningSlant;
export { ChatWarningSlant };
