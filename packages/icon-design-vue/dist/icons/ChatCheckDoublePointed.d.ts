import type { DefineComponent } from 'vue';

export interface ChatCheckDoublePointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoublePointed: DefineComponent<ChatCheckDoublePointedProps>;

export default ChatCheckDoublePointed;
export { ChatCheckDoublePointed };
