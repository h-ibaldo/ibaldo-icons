import type { DefineComponent } from 'vue';

export interface ChatSearchTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchTooltip: DefineComponent<ChatSearchTooltipProps>;

export default ChatSearchTooltip;
export { ChatSearchTooltip };
