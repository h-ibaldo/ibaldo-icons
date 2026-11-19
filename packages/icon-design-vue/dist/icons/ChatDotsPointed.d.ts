import type { DefineComponent } from 'vue';

export interface ChatDotsPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsPointed: DefineComponent<ChatDotsPointedProps>;

export default ChatDotsPointed;
export { ChatDotsPointed };
