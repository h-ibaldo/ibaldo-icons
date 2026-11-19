import type { DefineComponent } from 'vue';

export interface ChatStackTypingTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingTooltip: DefineComponent<ChatStackTypingTooltipProps>;

export default ChatStackTypingTooltip;
export { ChatStackTypingTooltip };
