import type { DefineComponent } from 'vue';

export interface ChatBanBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanBroken: DefineComponent<ChatBanBrokenProps>;

export default ChatBanBroken;
export { ChatBanBroken };
