import type { DefineComponent } from 'vue';

export interface ChatStarSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarSharp: DefineComponent<ChatStarSharpProps>;

export default ChatStarSharp;
export { ChatStarSharp };
