import type { DefineComponent } from 'vue';

export interface ChatOffBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffBoxy: DefineComponent<ChatOffBoxyProps>;

export default ChatOffBoxy;
export { ChatOffBoxy };
