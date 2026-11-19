import type { DefineComponent } from 'vue';

export interface ChatEditSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditSlant: DefineComponent<ChatEditSlantProps>;

export default ChatEditSlant;
export { ChatEditSlant };
