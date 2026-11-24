import type { DefineComponent } from 'vue';

export interface ChatStackCheckFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckFacing: DefineComponent<ChatStackCheckFacingProps>;

export default ChatStackCheckFacing;
export { ChatStackCheckFacing };
