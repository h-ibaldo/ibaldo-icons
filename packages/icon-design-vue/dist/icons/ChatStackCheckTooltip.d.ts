import type { DefineComponent } from 'vue';

export interface ChatStackCheckTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckTooltip: DefineComponent<ChatStackCheckTooltipProps>;

export default ChatStackCheckTooltip;
export { ChatStackCheckTooltip };
