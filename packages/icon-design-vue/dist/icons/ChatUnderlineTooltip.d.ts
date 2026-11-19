import type { DefineComponent } from 'vue';

export interface ChatUnderlineTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTooltip: DefineComponent<ChatUnderlineTooltipProps>;

export default ChatUnderlineTooltip;
export { ChatUnderlineTooltip };
