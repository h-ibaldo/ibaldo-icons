import type { DefineComponent } from 'vue';

export interface ChatTriangleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleSlant: DefineComponent<ChatTriangleSlantProps>;

export default ChatTriangleSlant;
export { ChatTriangleSlant };
