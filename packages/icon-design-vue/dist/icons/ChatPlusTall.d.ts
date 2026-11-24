import type { DefineComponent } from 'vue';

export interface ChatPlusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusTall: DefineComponent<ChatPlusTallProps>;

export default ChatPlusTall;
export { ChatPlusTall };
