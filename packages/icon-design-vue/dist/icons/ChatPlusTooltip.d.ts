import type { DefineComponent } from 'vue';

export interface ChatPlusTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusTooltip: DefineComponent<ChatPlusTooltipProps>;

export default ChatPlusTooltip;
export { ChatPlusTooltip };
