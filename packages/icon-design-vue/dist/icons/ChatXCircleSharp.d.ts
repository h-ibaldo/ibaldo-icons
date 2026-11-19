import type { DefineComponent } from 'vue';

export interface ChatXCircleSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleSharp: DefineComponent<ChatXCircleSharpProps>;

export default ChatXCircleSharp;
export { ChatXCircleSharp };
