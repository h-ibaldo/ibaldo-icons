import type { DefineComponent } from 'vue';

export interface ChatStackHashTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHashTooltip: DefineComponent<ChatStackHashTooltipProps>;

export default ChatStackHashTooltip;
export { ChatStackHashTooltip };
