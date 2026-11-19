import type { DefineComponent } from 'vue';

export interface ChatPlusCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerRound: DefineComponent<ChatPlusCornerRoundProps>;

export default ChatPlusCornerRound;
export { ChatPlusCornerRound };
