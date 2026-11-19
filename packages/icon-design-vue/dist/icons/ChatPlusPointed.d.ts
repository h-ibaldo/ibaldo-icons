import type { DefineComponent } from 'vue';

export interface ChatPlusPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusPointed: DefineComponent<ChatPlusPointedProps>;

export default ChatPlusPointed;
export { ChatPlusPointed };
