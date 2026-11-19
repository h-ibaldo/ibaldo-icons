import type { DefineComponent } from 'vue';

export interface ChatHappyBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappyBoxy: DefineComponent<ChatHappyBoxyProps>;

export default ChatHappyBoxy;
export { ChatHappyBoxy };
