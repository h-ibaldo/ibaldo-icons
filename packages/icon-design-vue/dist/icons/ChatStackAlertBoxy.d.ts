import type { DefineComponent } from 'vue';

export interface ChatStackAlertBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackAlertBoxy: DefineComponent<ChatStackAlertBoxyProps>;

export default ChatStackAlertBoxy;
export { ChatStackAlertBoxy };
