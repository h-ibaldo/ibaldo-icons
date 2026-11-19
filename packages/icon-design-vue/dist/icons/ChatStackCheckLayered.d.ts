import type { DefineComponent } from 'vue';

export interface ChatStackCheckLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckLayered: DefineComponent<ChatStackCheckLayeredProps>;

export default ChatStackCheckLayered;
export { ChatStackCheckLayered };
