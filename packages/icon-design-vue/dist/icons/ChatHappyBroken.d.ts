import type { DefineComponent } from 'vue';

export interface ChatHappyBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappyBroken: DefineComponent<ChatHappyBrokenProps>;

export default ChatHappyBroken;
export { ChatHappyBroken };
