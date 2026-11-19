import type { DefineComponent } from 'vue';

export interface ChatStackOffSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffSlant: DefineComponent<ChatStackOffSlantProps>;

export default ChatStackOffSlant;
export { ChatStackOffSlant };
