import type { DefineComponent } from 'vue';

export interface ChatUserTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserTooltip: DefineComponent<ChatUserTooltipProps>;

export default ChatUserTooltip;
export { ChatUserTooltip };
