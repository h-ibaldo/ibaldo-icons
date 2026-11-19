import type { DefineComponent } from 'vue';

export interface ChatStackEditSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditSlant: DefineComponent<ChatStackEditSlantProps>;

export default ChatStackEditSlant;
export { ChatStackEditSlant };
