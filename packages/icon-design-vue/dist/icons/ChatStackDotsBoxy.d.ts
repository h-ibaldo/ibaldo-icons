import type { DefineComponent } from 'vue';

export interface ChatStackDotsBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsBoxy: DefineComponent<ChatStackDotsBoxyProps>;

export default ChatStackDotsBoxy;
export { ChatStackDotsBoxy };
