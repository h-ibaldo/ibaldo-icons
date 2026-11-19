import type { DefineComponent } from 'vue';

export interface ChatStackImageSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackImageSlant: DefineComponent<ChatStackImageSlantProps>;

export default ChatStackImageSlant;
export { ChatStackImageSlant };
