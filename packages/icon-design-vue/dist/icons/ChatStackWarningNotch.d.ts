import type { DefineComponent } from 'vue';

export interface ChatStackWarningNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningNotch: DefineComponent<ChatStackWarningNotchProps>;

export default ChatStackWarningNotch;
export { ChatStackWarningNotch };
