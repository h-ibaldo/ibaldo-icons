import type { DefineComponent } from 'vue';

export interface ChatInfoTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoTooltip: DefineComponent<ChatInfoTooltipProps>;

export default ChatInfoTooltip;
export { ChatInfoTooltip };
