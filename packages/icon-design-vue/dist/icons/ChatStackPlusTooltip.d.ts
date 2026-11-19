import type { DefineComponent } from 'vue';

export interface ChatStackPlusTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusTooltip: DefineComponent<ChatStackPlusTooltipProps>;

export default ChatStackPlusTooltip;
export { ChatStackPlusTooltip };
