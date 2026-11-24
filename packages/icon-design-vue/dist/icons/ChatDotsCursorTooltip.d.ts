import type { DefineComponent } from 'vue';

export interface ChatDotsCursorTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorTooltip: DefineComponent<ChatDotsCursorTooltipProps>;

export default ChatDotsCursorTooltip;
export { ChatDotsCursorTooltip };
