import type { DefineComponent } from 'vue';

export interface ChatTextPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextPointed: DefineComponent<ChatTextPointedProps>;

export default ChatTextPointed;
export { ChatTextPointed };
