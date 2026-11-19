import type { DefineComponent } from 'vue';

export interface ChatStackUnderlineBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineBoxy: DefineComponent<ChatStackUnderlineBoxyProps>;

export default ChatStackUnderlineBoxy;
export { ChatStackUnderlineBoxy };
