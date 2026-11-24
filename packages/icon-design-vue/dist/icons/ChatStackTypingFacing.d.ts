import type { DefineComponent } from 'vue';

export interface ChatStackTypingFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingFacing: DefineComponent<ChatStackTypingFacingProps>;

export default ChatStackTypingFacing;
export { ChatStackTypingFacing };
