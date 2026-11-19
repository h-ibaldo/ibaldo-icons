import type { DefineComponent } from 'vue';

export interface ChatEyeTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeTooltip: DefineComponent<ChatEyeTooltipProps>;

export default ChatEyeTooltip;
export { ChatEyeTooltip };
