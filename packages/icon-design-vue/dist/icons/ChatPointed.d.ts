import type { DefineComponent } from 'vue';

export interface ChatPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPointed: DefineComponent<ChatPointedProps>;

export default ChatPointed;
export { ChatPointed };
