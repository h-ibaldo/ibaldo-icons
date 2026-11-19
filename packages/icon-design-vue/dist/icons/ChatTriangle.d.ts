import type { DefineComponent } from 'vue';

export interface ChatTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangle: DefineComponent<ChatTriangleProps>;

export default ChatTriangle;
export { ChatTriangle };
