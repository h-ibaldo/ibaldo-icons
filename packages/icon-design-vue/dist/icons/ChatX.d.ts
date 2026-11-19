import type { DefineComponent } from 'vue';

export interface ChatXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatX: DefineComponent<ChatXProps>;

export default ChatX;
export { ChatX };
