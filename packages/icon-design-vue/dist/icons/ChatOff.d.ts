import type { DefineComponent } from 'vue';

export interface ChatOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOff: DefineComponent<ChatOffProps>;

export default ChatOff;
export { ChatOff };
