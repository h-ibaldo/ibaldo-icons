import type { DefineComponent } from 'vue';

export interface ChatListTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListTooltip: DefineComponent<ChatListTooltipProps>;

export default ChatListTooltip;
export { ChatListTooltip };
