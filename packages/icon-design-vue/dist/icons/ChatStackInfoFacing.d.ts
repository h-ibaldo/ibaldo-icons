import type { DefineComponent } from 'vue';

export interface ChatStackInfoFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoFacing: DefineComponent<ChatStackInfoFacingProps>;

export default ChatStackInfoFacing;
export { ChatStackInfoFacing };
