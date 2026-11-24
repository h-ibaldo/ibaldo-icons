import type { DefineComponent } from 'vue';

export interface ChatEqualsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEquals: DefineComponent<ChatEqualsProps>;

export default ChatEquals;
export { ChatEquals };
