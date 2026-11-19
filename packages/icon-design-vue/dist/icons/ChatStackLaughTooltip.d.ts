import type { DefineComponent } from 'vue';

export interface ChatStackLaughTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughTooltip: DefineComponent<ChatStackLaughTooltipProps>;

export default ChatStackLaughTooltip;
export { ChatStackLaughTooltip };
