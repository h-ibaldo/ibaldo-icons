import type { DefineComponent } from 'vue';

export interface ChatXPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXPointed: DefineComponent<ChatXPointedProps>;

export default ChatXPointed;
export { ChatXPointed };
