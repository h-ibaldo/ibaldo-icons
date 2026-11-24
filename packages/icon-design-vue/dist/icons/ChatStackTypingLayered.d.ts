import type { DefineComponent } from 'vue';

export interface ChatStackTypingLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTypingLayered: DefineComponent<ChatStackTypingLayeredProps>;

export default ChatStackTypingLayered;
export { ChatStackTypingLayered };
