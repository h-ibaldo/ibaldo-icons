import type { DefineComponent } from 'vue';

export interface ChatStackForwardLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardLayered: DefineComponent<ChatStackForwardLayeredProps>;

export default ChatStackForwardLayered;
export { ChatStackForwardLayered };
