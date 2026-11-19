import type { DefineComponent } from 'vue';

export interface ChatDollarBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarBoxy: DefineComponent<ChatDollarBoxyProps>;

export default ChatDollarBoxy;
export { ChatDollarBoxy };
