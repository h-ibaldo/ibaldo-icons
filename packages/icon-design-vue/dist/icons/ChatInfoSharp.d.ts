import type { DefineComponent } from 'vue';

export interface ChatInfoSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoSharp: DefineComponent<ChatInfoSharpProps>;

export default ChatInfoSharp;
export { ChatInfoSharp };
