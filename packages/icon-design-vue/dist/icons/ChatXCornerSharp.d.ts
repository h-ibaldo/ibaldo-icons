import type { DefineComponent } from 'vue';

export interface ChatXCornerSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerSharp: DefineComponent<ChatXCornerSharpProps>;

export default ChatXCornerSharp;
export { ChatXCornerSharp };
