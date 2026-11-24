import type { DefineComponent } from 'vue';

export interface ChatCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheck: DefineComponent<ChatCheckProps>;

export default ChatCheck;
export { ChatCheck };
