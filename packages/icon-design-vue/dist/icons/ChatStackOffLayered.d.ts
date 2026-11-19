import type { DefineComponent } from 'vue';

export interface ChatStackOffLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffLayered: DefineComponent<ChatStackOffLayeredProps>;

export default ChatStackOffLayered;
export { ChatStackOffLayered };
