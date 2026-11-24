import type { DefineComponent } from 'vue';

export interface ChatStackTextStaggeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextStaggered: DefineComponent<ChatStackTextStaggeredProps>;

export default ChatStackTextStaggered;
export { ChatStackTextStaggered };
