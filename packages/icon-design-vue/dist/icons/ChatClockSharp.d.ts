import type { DefineComponent } from 'vue';

export interface ChatClockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockSharp: DefineComponent<ChatClockSharpProps>;

export default ChatClockSharp;
export { ChatClockSharp };
