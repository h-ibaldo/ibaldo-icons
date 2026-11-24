import type { DefineComponent } from 'vue';

export interface ChatTextTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextTooltip: DefineComponent<ChatTextTooltipProps>;

export default ChatTextTooltip;
export { ChatTextTooltip };
