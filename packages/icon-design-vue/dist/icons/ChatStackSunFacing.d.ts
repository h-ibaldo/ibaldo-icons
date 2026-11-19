import type { DefineComponent } from 'vue';

export interface ChatStackSunFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSunFacing: DefineComponent<ChatStackSunFacingProps>;

export default ChatStackSunFacing;
export { ChatStackSunFacing };
