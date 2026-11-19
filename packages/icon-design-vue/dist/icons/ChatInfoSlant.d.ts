import type { DefineComponent } from 'vue';

export interface ChatInfoSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoSlant: DefineComponent<ChatInfoSlantProps>;

export default ChatInfoSlant;
export { ChatInfoSlant };
