import type { DefineComponent } from 'vue';

export interface ChatStackForwardFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardFacing: DefineComponent<ChatStackForwardFacingProps>;

export default ChatStackForwardFacing;
export { ChatStackForwardFacing };
