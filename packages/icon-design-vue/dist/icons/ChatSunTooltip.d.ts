import type { DefineComponent } from 'vue';

export interface ChatSunTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunTooltip: DefineComponent<ChatSunTooltipProps>;

export default ChatSunTooltip;
export { ChatSunTooltip };
