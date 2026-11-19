import type { DefineComponent } from 'vue';

export interface ChatStackMinusBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusBoxy: DefineComponent<ChatStackMinusBoxyProps>;

export default ChatStackMinusBoxy;
export { ChatStackMinusBoxy };
