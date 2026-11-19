import type { DefineComponent } from 'vue';

export interface ChatStackTriangleNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleNotch: DefineComponent<ChatStackTriangleNotchProps>;

export default ChatStackTriangleNotch;
export { ChatStackTriangleNotch };
