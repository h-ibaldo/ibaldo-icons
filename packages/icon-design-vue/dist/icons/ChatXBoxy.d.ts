import type { DefineComponent } from 'vue';

export interface ChatXBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXBoxy: DefineComponent<ChatXBoxyProps>;

export default ChatXBoxy;
export { ChatXBoxy };
