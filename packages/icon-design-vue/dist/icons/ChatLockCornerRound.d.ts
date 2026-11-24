import type { DefineComponent } from 'vue';

export interface ChatLockCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLockCornerRound: DefineComponent<ChatLockCornerRoundProps>;

export default ChatLockCornerRound;
export { ChatLockCornerRound };
