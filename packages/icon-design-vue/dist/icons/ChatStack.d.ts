import type { DefineComponent } from 'vue';

export interface ChatStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStack: DefineComponent<ChatStackProps>;

export default ChatStack;
export { ChatStack };
