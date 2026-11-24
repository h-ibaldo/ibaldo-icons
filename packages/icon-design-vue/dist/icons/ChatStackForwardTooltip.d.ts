import type { DefineComponent } from 'vue';

export interface ChatStackForwardTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardTooltip: DefineComponent<ChatStackForwardTooltipProps>;

export default ChatStackForwardTooltip;
export { ChatStackForwardTooltip };
