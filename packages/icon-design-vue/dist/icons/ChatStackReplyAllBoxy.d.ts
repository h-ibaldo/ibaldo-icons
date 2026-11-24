import type { DefineComponent } from 'vue';

export interface ChatStackReplyAllBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllBoxy: DefineComponent<ChatStackReplyAllBoxyProps>;

export default ChatStackReplyAllBoxy;
export { ChatStackReplyAllBoxy };
