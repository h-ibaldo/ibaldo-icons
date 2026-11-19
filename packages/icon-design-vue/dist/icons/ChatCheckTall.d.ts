import type { DefineComponent } from 'vue';

export interface ChatCheckTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckTall: DefineComponent<ChatCheckTallProps>;

export default ChatCheckTall;
export { ChatCheckTall };
