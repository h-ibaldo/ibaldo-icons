import type { DefineComponent } from 'vue';

export interface ChatVideoTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoTooltip: DefineComponent<ChatVideoTooltipProps>;

export default ChatVideoTooltip;
export { ChatVideoTooltip };
