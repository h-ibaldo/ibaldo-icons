import type { DefineComponent } from 'vue';

export interface ChatTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTall: DefineComponent<ChatTallProps>;

export default ChatTall;
export { ChatTall };
