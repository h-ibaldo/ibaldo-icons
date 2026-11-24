import type { DefineComponent } from 'vue';

export interface ChatBanBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanBoxy: DefineComponent<ChatBanBoxyProps>;

export default ChatBanBoxy;
export { ChatBanBoxy };
