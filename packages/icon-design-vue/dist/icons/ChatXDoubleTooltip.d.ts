import type { DefineComponent } from 'vue';

export interface ChatXDoubleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleTooltip: DefineComponent<ChatXDoubleTooltipProps>;

export default ChatXDoubleTooltip;
export { ChatXDoubleTooltip };
