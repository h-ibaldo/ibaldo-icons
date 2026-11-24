import type { DefineComponent } from 'vue';

export interface ChatLaughSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughSlant: DefineComponent<ChatLaughSlantProps>;

export default ChatLaughSlant;
export { ChatLaughSlant };
