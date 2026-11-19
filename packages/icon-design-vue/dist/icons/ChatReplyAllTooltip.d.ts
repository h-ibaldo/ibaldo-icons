import type { DefineComponent } from 'vue';

export interface ChatReplyAllTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllTooltip: DefineComponent<ChatReplyAllTooltipProps>;

export default ChatReplyAllTooltip;
export { ChatReplyAllTooltip };
