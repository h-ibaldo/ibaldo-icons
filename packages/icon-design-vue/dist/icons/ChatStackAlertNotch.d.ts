import type { DefineComponent } from 'vue';

export interface ChatStackAlertNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertNotch: DefineComponent<ChatStackAlertNotchProps>;

export default ChatStackAlertNotch;
export { ChatStackAlertNotch };
