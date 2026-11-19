import type { DefineComponent } from 'vue';

export interface ChatTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatText: DefineComponent<ChatTextProps>;

export default ChatText;
export { ChatText };
