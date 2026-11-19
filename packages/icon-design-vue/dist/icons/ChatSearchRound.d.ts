import type { DefineComponent } from 'vue';

export interface ChatSearchRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchRound: DefineComponent<ChatSearchRoundProps>;

export default ChatSearchRound;
export { ChatSearchRound };
