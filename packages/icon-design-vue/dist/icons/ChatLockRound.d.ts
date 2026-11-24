import type { DefineComponent } from 'vue';

export interface ChatLockRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockRound: DefineComponent<ChatLockRoundProps>;

export default ChatLockRound;
export { ChatLockRound };
