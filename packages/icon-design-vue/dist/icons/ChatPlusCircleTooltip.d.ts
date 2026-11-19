import type { DefineComponent } from 'vue';

export interface ChatPlusCircleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleTooltip: DefineComponent<ChatPlusCircleTooltipProps>;

export default ChatPlusCircleTooltip;
export { ChatPlusCircleTooltip };
