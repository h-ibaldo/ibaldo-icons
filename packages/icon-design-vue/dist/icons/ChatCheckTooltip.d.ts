import type { DefineComponent } from 'vue';

export interface ChatCheckTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckTooltip: DefineComponent<ChatCheckTooltipProps>;

export default ChatCheckTooltip;
export { ChatCheckTooltip };
