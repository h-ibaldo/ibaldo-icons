import type { DefineComponent } from 'vue';

export interface ChatStackOneCircleLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOneCircleLayered: DefineComponent<ChatStackOneCircleLayeredProps>;

export default ChatStackOneCircleLayered;
export { ChatStackOneCircleLayered };
