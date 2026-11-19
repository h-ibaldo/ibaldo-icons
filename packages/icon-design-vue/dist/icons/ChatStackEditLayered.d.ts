import type { DefineComponent } from 'vue';

export interface ChatStackEditLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditLayered: DefineComponent<ChatStackEditLayeredProps>;

export default ChatStackEditLayered;
export { ChatStackEditLayered };
