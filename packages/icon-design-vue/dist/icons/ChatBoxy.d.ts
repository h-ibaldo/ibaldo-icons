import type { DefineComponent } from 'vue';

export interface ChatBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBoxy: DefineComponent<ChatBoxyProps>;

export default ChatBoxy;
export { ChatBoxy };
