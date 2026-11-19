import type { DefineComponent } from 'vue';

export interface ChatReplyAllBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyAllBoxy: DefineComponent<ChatReplyAllBoxyProps>;

export default ChatReplyAllBoxy;
export { ChatReplyAllBoxy };
