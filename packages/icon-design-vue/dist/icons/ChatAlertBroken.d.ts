import type { DefineComponent } from 'vue';

export interface ChatAlertBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertBroken: DefineComponent<ChatAlertBrokenProps>;

export default ChatAlertBroken;
export { ChatAlertBroken };
