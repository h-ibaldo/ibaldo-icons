import type { DefineComponent } from 'vue';

export interface ChatStackTextLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextLayered: DefineComponent<ChatStackTextLayeredProps>;

export default ChatStackTextLayered;
export { ChatStackTextLayered };
