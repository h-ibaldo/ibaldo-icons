import type { DefineComponent } from 'vue';

export interface ChatStackInfoSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoSlant: DefineComponent<ChatStackInfoSlantProps>;

export default ChatStackInfoSlant;
export { ChatStackInfoSlant };
