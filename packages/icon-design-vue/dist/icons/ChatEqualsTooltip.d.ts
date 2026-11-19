import type { DefineComponent } from 'vue';

export interface ChatEqualsTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsTooltip: DefineComponent<ChatEqualsTooltipProps>;

export default ChatEqualsTooltip;
export { ChatEqualsTooltip };
