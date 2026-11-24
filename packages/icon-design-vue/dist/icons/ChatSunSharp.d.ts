import type { DefineComponent } from 'vue';

export interface ChatSunSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunSharp: DefineComponent<ChatSunSharpProps>;

export default ChatSunSharp;
export { ChatSunSharp };
