import type { DefineComponent } from 'vue';

export interface ChatBanSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanSlant: DefineComponent<ChatBanSlantProps>;

export default ChatBanSlant;
export { ChatBanSlant };
