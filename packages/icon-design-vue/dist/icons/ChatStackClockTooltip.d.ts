import type { DefineComponent } from 'vue';

export interface ChatStackClockTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackClockTooltip: DefineComponent<ChatStackClockTooltipProps>;

export default ChatStackClockTooltip;
export { ChatStackClockTooltip };
