import type { DefineComponent } from 'vue';

export interface ChatStackAlertFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertFacing: DefineComponent<ChatStackAlertFacingProps>;

export default ChatStackAlertFacing;
export { ChatStackAlertFacing };
