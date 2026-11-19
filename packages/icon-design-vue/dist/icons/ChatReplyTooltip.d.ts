import type { DefineComponent } from 'vue';

export interface ChatReplyTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyTooltip: DefineComponent<ChatReplyTooltipProps>;

export default ChatReplyTooltip;
export { ChatReplyTooltip };
