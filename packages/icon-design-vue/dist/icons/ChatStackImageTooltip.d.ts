import type { DefineComponent } from 'vue';

export interface ChatStackImageTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackImageTooltip: DefineComponent<ChatStackImageTooltipProps>;

export default ChatStackImageTooltip;
export { ChatStackImageTooltip };
