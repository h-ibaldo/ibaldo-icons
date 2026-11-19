import type { DefineComponent } from 'vue';

export interface ChatInfoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfo: DefineComponent<ChatInfoProps>;

export default ChatInfo;
export { ChatInfo };
