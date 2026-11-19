import type { DefineComponent } from 'vue';

export interface ChatUnderlineTypingTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTypingTooltip: DefineComponent<ChatUnderlineTypingTooltipProps>;

export default ChatUnderlineTypingTooltip;
export { ChatUnderlineTypingTooltip };
