import type { DefineComponent } from 'vue';

export interface ChatTriangleTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleTooltip: DefineComponent<ChatTriangleTooltipProps>;

export default ChatTriangleTooltip;
export { ChatTriangleTooltip };
