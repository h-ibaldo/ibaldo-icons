import type { DefineComponent } from 'vue';

export interface ChatStackHeartLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartLayered: DefineComponent<ChatStackHeartLayeredProps>;

export default ChatStackHeartLayered;
export { ChatStackHeartLayered };
