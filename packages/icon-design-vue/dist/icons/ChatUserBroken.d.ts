import type { DefineComponent } from 'vue';

export interface ChatUserBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserBroken: DefineComponent<ChatUserBrokenProps>;

export default ChatUserBroken;
export { ChatUserBroken };
