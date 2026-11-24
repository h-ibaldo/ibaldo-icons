import type { DefineComponent } from 'vue';

export interface ChatBanTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanTooltip: DefineComponent<ChatBanTooltipProps>;

export default ChatBanTooltip;
export { ChatBanTooltip };
