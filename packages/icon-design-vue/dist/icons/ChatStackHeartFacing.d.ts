import type { DefineComponent } from 'vue';

export interface ChatStackHeartFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartFacing: DefineComponent<ChatStackHeartFacingProps>;

export default ChatStackHeartFacing;
export { ChatStackHeartFacing };
