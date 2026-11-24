import type { DefineComponent } from 'vue';

export interface ChatTriangleSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleSharp: DefineComponent<ChatTriangleSharpProps>;

export default ChatTriangleSharp;
export { ChatTriangleSharp };
