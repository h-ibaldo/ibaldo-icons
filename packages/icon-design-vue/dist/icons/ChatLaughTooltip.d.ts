import type { DefineComponent } from 'vue';

export interface ChatLaughTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughTooltip: DefineComponent<ChatLaughTooltipProps>;

export default ChatLaughTooltip;
export { ChatLaughTooltip };
