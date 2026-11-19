import type { DefineComponent } from 'vue';

export interface ChatStackThreeStaggeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackThreeStaggered: DefineComponent<ChatStackThreeStaggeredProps>;

export default ChatStackThreeStaggered;
export { ChatStackThreeStaggered };
