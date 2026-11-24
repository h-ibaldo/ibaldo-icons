import type { DefineComponent } from 'vue';

export interface ChatMinusTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusTooltip: DefineComponent<ChatMinusTooltipProps>;

export default ChatMinusTooltip;
export { ChatMinusTooltip };
