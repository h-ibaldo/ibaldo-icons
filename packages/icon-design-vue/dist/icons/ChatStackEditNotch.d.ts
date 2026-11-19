import type { DefineComponent } from 'vue';

export interface ChatStackEditNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditNotch: DefineComponent<ChatStackEditNotchProps>;

export default ChatStackEditNotch;
export { ChatStackEditNotch };
