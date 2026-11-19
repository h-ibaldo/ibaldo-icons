import type { DefineComponent } from 'vue';

export interface ChatXDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDouble: DefineComponent<ChatXDoubleProps>;

export default ChatXDouble;
export { ChatXDouble };
