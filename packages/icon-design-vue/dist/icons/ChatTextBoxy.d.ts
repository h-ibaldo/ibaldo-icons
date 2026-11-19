import type { DefineComponent } from 'vue';

export interface ChatTextBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextBoxy: DefineComponent<ChatTextBoxyProps>;

export default ChatTextBoxy;
export { ChatTextBoxy };
