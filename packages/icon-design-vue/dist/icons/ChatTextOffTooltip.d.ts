import type { DefineComponent } from 'vue';

export interface ChatTextOffTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffTooltip: DefineComponent<ChatTextOffTooltipProps>;

export default ChatTextOffTooltip;
export { ChatTextOffTooltip };
