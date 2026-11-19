import type { DefineComponent } from 'vue';

export interface ChatHeartBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartBroken: DefineComponent<ChatHeartBrokenProps>;

export default ChatHeartBroken;
export { ChatHeartBroken };
