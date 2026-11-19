import type { DefineComponent } from 'vue';

export interface ChatSearchSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchSlant: DefineComponent<ChatSearchSlantProps>;

export default ChatSearchSlant;
export { ChatSearchSlant };
