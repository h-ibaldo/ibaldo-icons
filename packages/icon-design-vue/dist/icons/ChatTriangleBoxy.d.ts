import type { DefineComponent } from 'vue';

export interface ChatTriangleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleBoxy: DefineComponent<ChatTriangleBoxyProps>;

export default ChatTriangleBoxy;
export { ChatTriangleBoxy };
