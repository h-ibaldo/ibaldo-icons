import type { DefineComponent } from 'vue';

export interface ChatImageBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageBroken: DefineComponent<ChatImageBrokenProps>;

export default ChatImageBroken;
export { ChatImageBroken };
