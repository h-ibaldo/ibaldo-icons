import type { DefineComponent } from 'vue';

export interface ChatLaughSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughSharp: DefineComponent<ChatLaughSharpProps>;

export default ChatLaughSharp;
export { ChatLaughSharp };
