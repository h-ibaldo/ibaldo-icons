import type { DefineComponent } from 'vue';

export interface ChatCheckDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckDouble: DefineComponent<ChatCheckDoubleProps>;

export default ChatCheckDouble;
export { ChatCheckDouble };
