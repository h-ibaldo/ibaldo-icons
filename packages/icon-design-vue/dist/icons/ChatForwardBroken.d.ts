import type { DefineComponent } from 'vue';

export interface ChatForwardBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardBroken: DefineComponent<ChatForwardBrokenProps>;

export default ChatForwardBroken;
export { ChatForwardBroken };
