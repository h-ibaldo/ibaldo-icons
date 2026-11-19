import type { DefineComponent } from 'vue';

export interface ChatLockCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerTooltip: DefineComponent<ChatLockCornerTooltipProps>;

export default ChatLockCornerTooltip;
export { ChatLockCornerTooltip };
