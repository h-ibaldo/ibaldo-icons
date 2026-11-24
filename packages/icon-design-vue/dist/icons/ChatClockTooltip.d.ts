import type { DefineComponent } from 'vue';

export interface ChatClockTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatClockTooltip: DefineComponent<ChatClockTooltipProps>;

export default ChatClockTooltip;
export { ChatClockTooltip };
