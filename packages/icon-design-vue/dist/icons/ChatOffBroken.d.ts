import type { DefineComponent } from 'vue';

export interface ChatOffBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffBroken: DefineComponent<ChatOffBrokenProps>;

export default ChatOffBroken;
export { ChatOffBroken };
