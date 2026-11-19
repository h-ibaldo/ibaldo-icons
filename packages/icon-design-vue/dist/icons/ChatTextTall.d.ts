import type { DefineComponent } from 'vue';

export interface ChatTextTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextTall: DefineComponent<ChatTextTallProps>;

export default ChatTextTall;
export { ChatTextTall };
