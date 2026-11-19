import type { DefineComponent } from 'vue';

export interface ChatStackOffTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffTooltip: DefineComponent<ChatStackOffTooltipProps>;

export default ChatStackOffTooltip;
export { ChatStackOffTooltip };
