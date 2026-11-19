import type { DefineComponent } from 'vue';

export interface ChatImageTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageTooltip: DefineComponent<ChatImageTooltipProps>;

export default ChatImageTooltip;
export { ChatImageTooltip };
