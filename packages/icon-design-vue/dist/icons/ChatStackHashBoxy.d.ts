import type { DefineComponent } from 'vue';

export interface ChatStackHashBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHashBoxy: DefineComponent<ChatStackHashBoxyProps>;

export default ChatStackHashBoxy;
export { ChatStackHashBoxy };
