import type { DefineComponent } from 'vue';

export interface ChatStackTriangleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleTooltip: DefineComponent<ChatStackTriangleTooltipProps>;

export default ChatStackTriangleTooltip;
export { ChatStackTriangleTooltip };
