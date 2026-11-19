import type { DefineComponent } from 'vue';

export interface ChatBanRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanRound: DefineComponent<ChatBanRoundProps>;

export default ChatBanRound;
export { ChatBanRound };
