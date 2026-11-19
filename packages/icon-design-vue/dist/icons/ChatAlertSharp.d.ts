import type { DefineComponent } from 'vue';

export interface ChatAlertSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertSharp: DefineComponent<ChatAlertSharpProps>;

export default ChatAlertSharp;
export { ChatAlertSharp };
