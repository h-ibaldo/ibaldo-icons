import type { DefineComponent } from 'vue';

export interface ChatStackFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackFacing: DefineComponent<ChatStackFacingProps>;

export default ChatStackFacing;
export { ChatStackFacing };
