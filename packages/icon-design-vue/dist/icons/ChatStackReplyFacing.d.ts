import type { DefineComponent } from 'vue';

export interface ChatStackReplyFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyFacing: DefineComponent<ChatStackReplyFacingProps>;

export default ChatStackReplyFacing;
export { ChatStackReplyFacing };
