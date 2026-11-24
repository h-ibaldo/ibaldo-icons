import type { DefineComponent } from 'vue';

export interface ChatAlertSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertSlant: DefineComponent<ChatAlertSlantProps>;

export default ChatAlertSlant;
export { ChatAlertSlant };
