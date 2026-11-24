import type { DefineComponent } from 'vue';

export interface ChatQuestionTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatQuestionTooltip: DefineComponent<ChatQuestionTooltipProps>;

export default ChatQuestionTooltip;
export { ChatQuestionTooltip };
