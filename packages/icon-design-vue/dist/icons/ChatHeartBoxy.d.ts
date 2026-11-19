import type { DefineComponent } from 'vue';

export interface ChatHeartBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartBoxy: DefineComponent<ChatHeartBoxyProps>;

export default ChatHeartBoxy;
export { ChatHeartBoxy };
