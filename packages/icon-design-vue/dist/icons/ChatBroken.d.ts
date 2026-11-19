import type { DefineComponent } from 'vue';

export interface ChatBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBroken: DefineComponent<ChatBrokenProps>;

export default ChatBroken;
export { ChatBroken };
