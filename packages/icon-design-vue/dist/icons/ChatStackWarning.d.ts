import type { DefineComponent } from 'vue';

export interface ChatStackWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarning: DefineComponent<ChatStackWarningProps>;

export default ChatStackWarning;
export { ChatStackWarning };
