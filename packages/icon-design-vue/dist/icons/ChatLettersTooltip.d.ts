import type { DefineComponent } from 'vue';

export interface ChatLettersTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersTooltip: DefineComponent<ChatLettersTooltipProps>;

export default ChatLettersTooltip;
export { ChatLettersTooltip };
