import type { DefineComponent } from 'vue';

export interface ChatStackDotsLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsLayered: DefineComponent<ChatStackDotsLayeredProps>;

export default ChatStackDotsLayered;
export { ChatStackDotsLayered };
