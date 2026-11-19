import type { DefineComponent } from 'vue';

export interface ChatStackEditFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditFacing: DefineComponent<ChatStackEditFacingProps>;

export default ChatStackEditFacing;
export { ChatStackEditFacing };
