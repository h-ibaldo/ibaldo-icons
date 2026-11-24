import type { DefineComponent } from 'vue';

export interface ChatStackHeartTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartTooltip: DefineComponent<ChatStackHeartTooltipProps>;

export default ChatStackHeartTooltip;
export { ChatStackHeartTooltip };
