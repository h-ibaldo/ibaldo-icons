import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTooltip: DefineComponent<ChatStackUnderlineTooltipProps>;

export default ChatStackUnderlineTooltip;
export { ChatStackUnderlineTooltip };
