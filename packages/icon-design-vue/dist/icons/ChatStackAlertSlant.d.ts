import type { DefineComponent } from 'vue';

export interface ChatStackAlertSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertSlant: DefineComponent<ChatStackAlertSlantProps>;

export default ChatStackAlertSlant;
export { ChatStackAlertSlant };
