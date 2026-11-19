import type { DefineComponent } from 'vue';

export interface ChatTypingTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTypingTooltip: DefineComponent<ChatTypingTooltipProps>;

export default ChatTypingTooltip;
export { ChatTypingTooltip };
