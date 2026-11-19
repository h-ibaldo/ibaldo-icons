import type { DefineComponent } from 'vue';

export interface ChatDotsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsVertical: DefineComponent<ChatDotsVerticalProps>;

export default ChatDotsVertical;
export { ChatDotsVertical };
