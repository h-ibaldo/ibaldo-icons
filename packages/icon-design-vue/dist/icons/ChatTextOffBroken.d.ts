import type { DefineComponent } from 'vue';

export interface ChatTextOffBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffBroken: DefineComponent<ChatTextOffBrokenProps>;

export default ChatTextOffBroken;
export { ChatTextOffBroken };
