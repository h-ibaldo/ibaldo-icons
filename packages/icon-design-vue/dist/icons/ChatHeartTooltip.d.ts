import type { DefineComponent } from 'vue';

export interface ChatHeartTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartTooltip: DefineComponent<ChatHeartTooltipProps>;

export default ChatHeartTooltip;
export { ChatHeartTooltip };
