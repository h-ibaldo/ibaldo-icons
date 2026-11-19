import type { DefineComponent } from 'vue';

export interface ChatEyeSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeSharp: DefineComponent<ChatEyeSharpProps>;

export default ChatEyeSharp;
export { ChatEyeSharp };
