import type { DefineComponent } from 'vue';

export interface ChatUserBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserBoxy: DefineComponent<ChatUserBoxyProps>;

export default ChatUserBoxy;
export { ChatUserBoxy };
