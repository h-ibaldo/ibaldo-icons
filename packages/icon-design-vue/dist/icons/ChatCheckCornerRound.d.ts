import type { DefineComponent } from 'vue';

export interface ChatCheckCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerRound: DefineComponent<ChatCheckCornerRoundProps>;

export default ChatCheckCornerRound;
export { ChatCheckCornerRound };
