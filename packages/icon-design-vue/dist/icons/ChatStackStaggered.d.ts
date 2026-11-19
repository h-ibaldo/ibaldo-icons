import type { DefineComponent } from 'vue';

export interface ChatStackStaggeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackStaggered: DefineComponent<ChatStackStaggeredProps>;

export default ChatStackStaggered;
export { ChatStackStaggered };
