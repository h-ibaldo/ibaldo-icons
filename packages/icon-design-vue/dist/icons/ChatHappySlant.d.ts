import type { DefineComponent } from 'vue';

export interface ChatHappySlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappySlant: DefineComponent<ChatHappySlantProps>;

export default ChatHappySlant;
export { ChatHappySlant };
