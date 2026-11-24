import type { DefineComponent } from 'vue';

export interface ChatStackHappyTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyTooltip: DefineComponent<ChatStackHappyTooltipProps>;

export default ChatStackHappyTooltip;
export { ChatStackHappyTooltip };
