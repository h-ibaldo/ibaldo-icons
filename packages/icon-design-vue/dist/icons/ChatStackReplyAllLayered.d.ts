import type { DefineComponent } from 'vue';

export interface ChatStackReplyAllLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyAllLayered: DefineComponent<ChatStackReplyAllLayeredProps>;

export default ChatStackReplyAllLayered;
export { ChatStackReplyAllLayered };
