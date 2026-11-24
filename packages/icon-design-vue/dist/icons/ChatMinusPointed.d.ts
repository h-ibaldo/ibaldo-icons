import type { DefineComponent } from 'vue';

export interface ChatMinusPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusPointed: DefineComponent<ChatMinusPointedProps>;

export default ChatMinusPointed;
export { ChatMinusPointed };
