import type { DefineComponent } from 'vue';

export interface ChatStackTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangle: DefineComponent<ChatStackTriangleProps>;

export default ChatStackTriangle;
export { ChatStackTriangle };
