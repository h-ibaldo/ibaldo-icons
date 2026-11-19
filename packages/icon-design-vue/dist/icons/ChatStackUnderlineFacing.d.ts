import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineFacing: DefineComponent<ChatStackUnderlineFacingProps>;

export default ChatStackUnderlineFacing;
export { ChatStackUnderlineFacing };
