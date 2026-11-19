import type { DefineComponent } from 'vue';

export interface ChatStackEditBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackEditBoxy: DefineComponent<ChatStackEditBoxyProps>;

export default ChatStackEditBoxy;
export { ChatStackEditBoxy };
