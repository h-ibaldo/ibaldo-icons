import type { DefineComponent } from 'vue';

export interface ChatStackInfoLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoLayered: DefineComponent<ChatStackInfoLayeredProps>;

export default ChatStackInfoLayered;
export { ChatStackInfoLayered };
