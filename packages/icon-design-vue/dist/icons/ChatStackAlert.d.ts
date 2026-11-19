import type { DefineComponent } from 'vue';

export interface ChatStackAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlert: DefineComponent<ChatStackAlertProps>;

export default ChatStackAlert;
export { ChatStackAlert };
