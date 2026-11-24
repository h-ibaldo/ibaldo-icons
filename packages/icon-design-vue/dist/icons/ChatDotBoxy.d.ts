import type { DefineComponent } from 'vue';

export interface ChatDotBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotBoxy: DefineComponent<ChatDotBoxyProps>;

export default ChatDotBoxy;
export { ChatDotBoxy };
