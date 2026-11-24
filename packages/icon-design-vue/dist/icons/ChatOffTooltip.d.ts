import type { DefineComponent } from 'vue';

export interface ChatOffTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffTooltip: DefineComponent<ChatOffTooltipProps>;

export default ChatOffTooltip;
export { ChatOffTooltip };
