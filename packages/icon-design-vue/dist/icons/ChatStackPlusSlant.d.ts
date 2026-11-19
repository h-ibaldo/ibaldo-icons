import type { DefineComponent } from 'vue';

export interface ChatStackPlusSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusSlant: DefineComponent<ChatStackPlusSlantProps>;

export default ChatStackPlusSlant;
export { ChatStackPlusSlant };
