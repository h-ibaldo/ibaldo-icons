import type { DefineComponent } from 'vue';

export interface ChatWarningSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningSharp: DefineComponent<ChatWarningSharpProps>;

export default ChatWarningSharp;
export { ChatWarningSharp };
