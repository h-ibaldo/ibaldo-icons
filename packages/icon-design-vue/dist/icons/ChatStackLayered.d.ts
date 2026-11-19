import type { DefineComponent } from 'vue';

export interface ChatStackLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLayered: DefineComponent<ChatStackLayeredProps>;

export default ChatStackLayered;
export { ChatStackLayered };
