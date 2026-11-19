import type { DefineComponent } from 'vue';

export interface ChatTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTooltip: DefineComponent<ChatTooltipProps>;

export default ChatTooltip;
export { ChatTooltip };
