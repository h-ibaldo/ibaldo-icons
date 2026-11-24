import type { DefineComponent } from 'vue';

export interface ChatStackAlertLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertLayered: DefineComponent<ChatStackAlertLayeredProps>;

export default ChatStackAlertLayered;
export { ChatStackAlertLayered };
