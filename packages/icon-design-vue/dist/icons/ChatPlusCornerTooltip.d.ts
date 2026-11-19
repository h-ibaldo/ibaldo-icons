import type { DefineComponent } from 'vue';

export interface ChatPlusCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerTooltip: DefineComponent<ChatPlusCornerTooltipProps>;

export default ChatPlusCornerTooltip;
export { ChatPlusCornerTooltip };
