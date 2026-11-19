import type { DefineComponent } from 'vue';

export interface ChatUserWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUserWide: DefineComponent<ChatUserWideProps>;

export default ChatUserWide;
export { ChatUserWide };
