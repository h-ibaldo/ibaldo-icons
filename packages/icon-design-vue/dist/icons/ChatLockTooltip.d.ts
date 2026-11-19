import type { DefineComponent } from 'vue';

export interface ChatLockTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockTooltip: DefineComponent<ChatLockTooltipProps>;

export default ChatLockTooltip;
export { ChatLockTooltip };
