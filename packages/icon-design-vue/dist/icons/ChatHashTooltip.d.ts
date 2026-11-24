import type { DefineComponent } from 'vue';

export interface ChatHashTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashTooltip: DefineComponent<ChatHashTooltipProps>;

export default ChatHashTooltip;
export { ChatHashTooltip };
