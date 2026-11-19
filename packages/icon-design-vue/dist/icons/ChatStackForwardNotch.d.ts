import type { DefineComponent } from 'vue';

export interface ChatStackForwardNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardNotch: DefineComponent<ChatStackForwardNotchProps>;

export default ChatStackForwardNotch;
export { ChatStackForwardNotch };
