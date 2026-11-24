import type { DefineComponent } from 'vue';

export interface ChatStackClockFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockFacing: DefineComponent<ChatStackClockFacingProps>;

export default ChatStackClockFacing;
export { ChatStackClockFacing };
