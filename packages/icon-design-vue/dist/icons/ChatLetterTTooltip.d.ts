import type { DefineComponent } from 'vue';

export interface ChatLetterTTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTTooltip: DefineComponent<ChatLetterTTooltipProps>;

export default ChatLetterTTooltip;
export { ChatLetterTTooltip };
