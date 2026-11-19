import type { DefineComponent } from 'vue';

export interface ChatStackTextSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackTextSlant: DefineComponent<ChatStackTextSlantProps>;

export default ChatStackTextSlant;
export { ChatStackTextSlant };
