import type { DefineComponent } from 'vue';

export interface ChatCheckPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckPointed: DefineComponent<ChatCheckPointedProps>;

export default ChatCheckPointed;
export { ChatCheckPointed };
