import type { DefineComponent } from 'vue';

export interface ChatDotsVerticalBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalBoxy: DefineComponent<ChatDotsVerticalBoxyProps>;

export default ChatDotsVerticalBoxy;
export { ChatDotsVerticalBoxy };
