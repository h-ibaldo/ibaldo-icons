import type { DefineComponent } from 'vue';

export interface ChatStackHashLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHashLayered: DefineComponent<ChatStackHashLayeredProps>;

export default ChatStackHashLayered;
export { ChatStackHashLayered };
