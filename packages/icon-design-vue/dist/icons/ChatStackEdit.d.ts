import type { DefineComponent } from 'vue';

export interface ChatStackEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEdit: DefineComponent<ChatStackEditProps>;

export default ChatStackEdit;
export { ChatStackEdit };
