import type { DefineComponent } from 'vue';

export interface ChatStackTextBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextBoxy: DefineComponent<ChatStackTextBoxyProps>;

export default ChatStackTextBoxy;
export { ChatStackTextBoxy };
