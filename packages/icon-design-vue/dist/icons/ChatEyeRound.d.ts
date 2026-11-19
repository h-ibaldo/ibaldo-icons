import type { DefineComponent } from 'vue';

export interface ChatEyeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeRound: DefineComponent<ChatEyeRoundProps>;

export default ChatEyeRound;
export { ChatEyeRound };
