import type { DefineComponent } from 'vue';

export interface ChatTextOffBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffBoxy: DefineComponent<ChatTextOffBoxyProps>;

export default ChatTextOffBoxy;
export { ChatTextOffBoxy };
