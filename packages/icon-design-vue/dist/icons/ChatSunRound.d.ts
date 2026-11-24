import type { DefineComponent } from 'vue';

export interface ChatSunRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunRound: DefineComponent<ChatSunRoundProps>;

export default ChatSunRound;
export { ChatSunRound };
