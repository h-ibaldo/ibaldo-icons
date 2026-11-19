import type { DefineComponent } from 'vue';

export interface ChatListWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatListWide: DefineComponent<ChatListWideProps>;

export default ChatListWide;
export { ChatListWide };
