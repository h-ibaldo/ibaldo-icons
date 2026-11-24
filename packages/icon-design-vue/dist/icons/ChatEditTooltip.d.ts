import type { DefineComponent } from 'vue';

export interface ChatEditTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditTooltip: DefineComponent<ChatEditTooltipProps>;

export default ChatEditTooltip;
export { ChatEditTooltip };
