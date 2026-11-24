import type { DefineComponent } from 'vue';

export interface ChatStackSunTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSunTooltip: DefineComponent<ChatStackSunTooltipProps>;

export default ChatStackSunTooltip;
export { ChatStackSunTooltip };
