import type { DefineComponent } from 'vue';

export interface ChatDotBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotBroken: DefineComponent<ChatDotBrokenProps>;

export default ChatDotBroken;
export { ChatDotBroken };
