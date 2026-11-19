import type { DefineComponent } from 'vue';

export interface ChatHappyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappy: DefineComponent<ChatHappyProps>;

export default ChatHappy;
export { ChatHappy };
