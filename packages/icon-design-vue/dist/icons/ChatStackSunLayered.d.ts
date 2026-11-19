import type { DefineComponent } from 'vue';

export interface ChatStackSunLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSunLayered: DefineComponent<ChatStackSunLayeredProps>;

export default ChatStackSunLayered;
export { ChatStackSunLayered };
