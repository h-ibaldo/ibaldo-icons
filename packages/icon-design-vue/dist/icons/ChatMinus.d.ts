import type { DefineComponent } from 'vue';

export interface ChatMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinus: DefineComponent<ChatMinusProps>;

export default ChatMinus;
export { ChatMinus };
