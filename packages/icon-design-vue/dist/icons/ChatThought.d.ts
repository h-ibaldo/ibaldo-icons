import type { DefineComponent } from 'vue';

export interface ChatThoughtProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatThought: DefineComponent<ChatThoughtProps>;

export default ChatThought;
export { ChatThought };
