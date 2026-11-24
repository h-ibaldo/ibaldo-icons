import type { DefineComponent } from 'vue';

export interface ChatStackReplyBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyBoxy: DefineComponent<ChatStackReplyBoxyProps>;

export default ChatStackReplyBoxy;
export { ChatStackReplyBoxy };
