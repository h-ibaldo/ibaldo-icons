import type { DefineComponent } from 'vue';

export interface ChatStackXFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXFacing: DefineComponent<ChatStackXFacingProps>;

export default ChatStackXFacing;
export { ChatStackXFacing };
