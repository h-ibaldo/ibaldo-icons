import type { DefineComponent } from 'vue';

export interface ChatDotsCursorBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCursorBoxy: DefineComponent<ChatDotsCursorBoxyProps>;

export default ChatDotsCursorBoxy;
export { ChatDotsCursorBoxy };
