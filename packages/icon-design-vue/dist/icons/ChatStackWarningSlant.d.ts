import type { DefineComponent } from 'vue';

export interface ChatStackWarningSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningSlant: DefineComponent<ChatStackWarningSlantProps>;

export default ChatStackWarningSlant;
export { ChatStackWarningSlant };
