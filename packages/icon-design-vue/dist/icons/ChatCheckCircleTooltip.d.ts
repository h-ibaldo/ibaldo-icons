import type { DefineComponent } from 'vue';

export interface ChatCheckCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleTooltip: DefineComponent<ChatCheckCircleTooltipProps>;

export default ChatCheckCircleTooltip;
export { ChatCheckCircleTooltip };
