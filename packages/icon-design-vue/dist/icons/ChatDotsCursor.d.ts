import type { DefineComponent } from 'vue';

export interface ChatDotsCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursor: DefineComponent<ChatDotsCursorProps>;

export default ChatDotsCursor;
export { ChatDotsCursor };
