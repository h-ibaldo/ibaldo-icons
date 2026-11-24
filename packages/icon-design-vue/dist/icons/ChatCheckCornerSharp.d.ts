import type { DefineComponent } from 'vue';

export interface ChatCheckCornerSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerSharp: DefineComponent<ChatCheckCornerSharpProps>;

export default ChatCheckCornerSharp;
export { ChatCheckCornerSharp };
