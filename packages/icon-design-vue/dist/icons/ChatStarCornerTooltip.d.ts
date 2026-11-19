import type { DefineComponent } from 'vue';

export interface ChatStarCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerTooltip: DefineComponent<ChatStarCornerTooltipProps>;

export default ChatStarCornerTooltip;
export { ChatStarCornerTooltip };
