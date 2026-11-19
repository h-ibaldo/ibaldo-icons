import type { DefineComponent } from 'vue';

export interface ChatStackTriangleLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleLayered: DefineComponent<ChatStackTriangleLayeredProps>;

export default ChatStackTriangleLayered;
export { ChatStackTriangleLayered };
