import type { DefineComponent } from 'vue';

export interface ChatAlertBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertBoxy: DefineComponent<ChatAlertBoxyProps>;

export default ChatAlertBoxy;
export { ChatAlertBoxy };
