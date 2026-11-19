import type { DefineComponent } from 'vue';

export interface ChatXCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerTooltip: DefineComponent<ChatXCornerTooltipProps>;

export default ChatXCornerTooltip;
export { ChatXCornerTooltip };
