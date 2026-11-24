import type { DefineComponent } from 'vue';

export interface ChatCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckRound: DefineComponent<ChatCheckRoundProps>;

export default ChatCheckRound;
export { ChatCheckRound };
