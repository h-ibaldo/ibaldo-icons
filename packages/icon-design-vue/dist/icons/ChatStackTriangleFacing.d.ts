import type { DefineComponent } from 'vue';

export interface ChatStackTriangleFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleFacing: DefineComponent<ChatStackTriangleFacingProps>;

export default ChatStackTriangleFacing;
export { ChatStackTriangleFacing };
