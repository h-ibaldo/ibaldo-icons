import type { DefineComponent } from 'vue';

export interface ChatXTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXTall: DefineComponent<ChatXTallProps>;

export default ChatXTall;
export { ChatXTall };
