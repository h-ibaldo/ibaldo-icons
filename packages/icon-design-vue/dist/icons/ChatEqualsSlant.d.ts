import type { DefineComponent } from 'vue';

export interface ChatEqualsSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsSlant: DefineComponent<ChatEqualsSlantProps>;

export default ChatEqualsSlant;
export { ChatEqualsSlant };
