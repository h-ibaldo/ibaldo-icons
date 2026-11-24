import type { DefineComponent } from 'vue';

export interface ChatStackMinusTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusTooltip: DefineComponent<ChatStackMinusTooltipProps>;

export default ChatStackMinusTooltip;
export { ChatStackMinusTooltip };
