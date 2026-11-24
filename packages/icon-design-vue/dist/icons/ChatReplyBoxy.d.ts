import type { DefineComponent } from 'vue';

export interface ChatReplyBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyBoxy: DefineComponent<ChatReplyBoxyProps>;

export default ChatReplyBoxy;
export { ChatReplyBoxy };
