import type { DefineComponent } from 'vue';

export interface ChatStackWarningFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningFacing: DefineComponent<ChatStackWarningFacingProps>;

export default ChatStackWarningFacing;
export { ChatStackWarningFacing };
