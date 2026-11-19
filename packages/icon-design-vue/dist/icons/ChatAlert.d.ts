import type { DefineComponent } from 'vue';

export interface ChatAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlert: DefineComponent<ChatAlertProps>;

export default ChatAlert;
export { ChatAlert };
