import type { DefineComponent } from 'vue';

export interface ChatStackReplyTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyTooltip: DefineComponent<ChatStackReplyTooltipProps>;

export default ChatStackReplyTooltip;
export { ChatStackReplyTooltip };
