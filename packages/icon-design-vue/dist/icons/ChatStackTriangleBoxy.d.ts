import type { DefineComponent } from 'vue';

export interface ChatStackTriangleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleBoxy: DefineComponent<ChatStackTriangleBoxyProps>;

export default ChatStackTriangleBoxy;
export { ChatStackTriangleBoxy };
