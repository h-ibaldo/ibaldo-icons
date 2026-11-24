import type { DefineComponent } from 'vue';

export interface ChatStackTextTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextTooltip: DefineComponent<ChatStackTextTooltipProps>;

export default ChatStackTextTooltip;
export { ChatStackTextTooltip };
