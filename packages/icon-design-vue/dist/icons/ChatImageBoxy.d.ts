import type { DefineComponent } from 'vue';

export interface ChatImageBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageBoxy: DefineComponent<ChatImageBoxyProps>;

export default ChatImageBoxy;
export { ChatImageBoxy };
