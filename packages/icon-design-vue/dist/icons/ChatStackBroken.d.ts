import type { DefineComponent } from 'vue';

export interface ChatStackBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackBroken: DefineComponent<ChatStackBrokenProps>;

export default ChatStackBroken;
export { ChatStackBroken };
