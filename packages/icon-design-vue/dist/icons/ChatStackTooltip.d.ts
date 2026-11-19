import type { DefineComponent } from 'vue';

export interface ChatStackTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTooltip: DefineComponent<ChatStackTooltipProps>;

export default ChatStackTooltip;
export { ChatStackTooltip };
