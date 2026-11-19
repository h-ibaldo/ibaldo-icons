import type { DefineComponent } from 'vue';

export interface ChatStackDotsTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsTooltip: DefineComponent<ChatStackDotsTooltipProps>;

export default ChatStackDotsTooltip;
export { ChatStackDotsTooltip };
