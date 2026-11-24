import type { DefineComponent } from 'vue';

export interface ChatHappyTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappyTooltip: DefineComponent<ChatHappyTooltipProps>;

export default ChatHappyTooltip;
export { ChatHappyTooltip };
