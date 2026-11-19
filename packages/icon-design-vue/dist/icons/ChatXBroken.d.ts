import type { DefineComponent } from 'vue';

export interface ChatXBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXBroken: DefineComponent<ChatXBrokenProps>;

export default ChatXBroken;
export { ChatXBroken };
