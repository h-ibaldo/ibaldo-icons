import type { DefineComponent } from 'vue';

export interface ChatHashBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashBroken: DefineComponent<ChatHashBrokenProps>;

export default ChatHashBroken;
export { ChatHashBroken };
