import type { DefineComponent } from 'vue';

export interface ChatStackPlusLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusLayered: DefineComponent<ChatStackPlusLayeredProps>;

export default ChatStackPlusLayered;
export { ChatStackPlusLayered };
