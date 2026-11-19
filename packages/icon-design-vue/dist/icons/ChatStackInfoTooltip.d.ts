import type { DefineComponent } from 'vue';

export interface ChatStackInfoTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoTooltip: DefineComponent<ChatStackInfoTooltipProps>;

export default ChatStackInfoTooltip;
export { ChatStackInfoTooltip };
