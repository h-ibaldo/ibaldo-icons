import type { DefineComponent } from 'vue';

export interface ChatStackReplyLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackReplyLayered: DefineComponent<ChatStackReplyLayeredProps>;

export default ChatStackReplyLayered;
export { ChatStackReplyLayered };
