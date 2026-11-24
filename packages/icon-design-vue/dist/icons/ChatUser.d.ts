import type { DefineComponent } from 'vue';

export interface ChatUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUser: DefineComponent<ChatUserProps>;

export default ChatUser;
export { ChatUser };
