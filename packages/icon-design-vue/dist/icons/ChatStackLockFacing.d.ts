import type { DefineComponent } from 'vue';

export interface ChatStackLockFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLockFacing: DefineComponent<ChatStackLockFacingProps>;

export default ChatStackLockFacing;
export { ChatStackLockFacing };
