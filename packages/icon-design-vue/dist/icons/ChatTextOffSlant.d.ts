import type { DefineComponent } from 'vue';

export interface ChatTextOffSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffSlant: DefineComponent<ChatTextOffSlantProps>;

export default ChatTextOffSlant;
export { ChatTextOffSlant };
