import type { DefineComponent } from 'vue';

export interface ChatCheckCornerTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerTooltip: DefineComponent<ChatCheckCornerTooltipProps>;

export default ChatCheckCornerTooltip;
export { ChatCheckCornerTooltip };
