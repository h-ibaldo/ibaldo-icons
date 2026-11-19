import type { DefineComponent } from 'vue';

export interface ChatUserRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserRound: DefineComponent<ChatUserRoundProps>;

export default ChatUserRound;
export { ChatUserRound };
