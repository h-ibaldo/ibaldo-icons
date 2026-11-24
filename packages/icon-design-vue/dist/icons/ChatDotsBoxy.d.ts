import type { DefineComponent } from 'vue';

export interface ChatDotsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsBoxy: DefineComponent<ChatDotsBoxyProps>;

export default ChatDotsBoxy;
export { ChatDotsBoxy };
