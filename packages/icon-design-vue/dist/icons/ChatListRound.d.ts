import type { DefineComponent } from 'vue';

export interface ChatListRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListRound: DefineComponent<ChatListRoundProps>;

export default ChatListRound;
export { ChatListRound };
