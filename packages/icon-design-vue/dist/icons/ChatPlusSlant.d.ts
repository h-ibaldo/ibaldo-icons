import type { DefineComponent } from 'vue';

export interface ChatPlusSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusSlant: DefineComponent<ChatPlusSlantProps>;

export default ChatPlusSlant;
export { ChatPlusSlant };
