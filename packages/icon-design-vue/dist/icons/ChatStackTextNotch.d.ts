import type { DefineComponent } from 'vue';

export interface ChatStackTextNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextNotch: DefineComponent<ChatStackTextNotchProps>;

export default ChatStackTextNotch;
export { ChatStackTextNotch };
