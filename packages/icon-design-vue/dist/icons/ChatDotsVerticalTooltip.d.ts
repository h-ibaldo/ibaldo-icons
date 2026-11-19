import type { DefineComponent } from 'vue';

export interface ChatDotsVerticalTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalTooltip: DefineComponent<ChatDotsVerticalTooltipProps>;

export default ChatDotsVerticalTooltip;
export { ChatDotsVerticalTooltip };
