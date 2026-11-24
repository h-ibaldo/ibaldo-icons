import type { DefineComponent } from 'vue';

export interface ChatStackTextFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextFacing: DefineComponent<ChatStackTextFacingProps>;

export default ChatStackTextFacing;
export { ChatStackTextFacing };
