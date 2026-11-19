import type { DefineComponent } from 'vue';

export interface ChatBanCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanCorner: DefineComponent<ChatBanCornerProps>;

export default ChatBanCorner;
export { ChatBanCorner };
