import type { DefineComponent } from 'vue';

export interface ChatHashBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashBoxy: DefineComponent<ChatHashBoxyProps>;

export default ChatHashBoxy;
export { ChatHashBoxy };
