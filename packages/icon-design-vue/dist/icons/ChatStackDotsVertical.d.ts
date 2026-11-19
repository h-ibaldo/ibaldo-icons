import type { DefineComponent } from 'vue';

export interface ChatStackDotsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVertical: DefineComponent<ChatStackDotsVerticalProps>;

export default ChatStackDotsVertical;
export { ChatStackDotsVertical };
