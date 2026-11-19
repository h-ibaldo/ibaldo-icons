import type { DefineComponent } from 'vue';

export interface ChatDotTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotTooltip: DefineComponent<ChatDotTooltipProps>;

export default ChatDotTooltip;
export { ChatDotTooltip };
