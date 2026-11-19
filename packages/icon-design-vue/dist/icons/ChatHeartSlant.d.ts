import type { DefineComponent } from 'vue';

export interface ChatHeartSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartSlant: DefineComponent<ChatHeartSlantProps>;

export default ChatHeartSlant;
export { ChatHeartSlant };
