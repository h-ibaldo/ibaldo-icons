import type { DefineComponent } from 'vue';

export interface ChatReplyWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatReplyWide: DefineComponent<ChatReplyWideProps>;

export default ChatReplyWide;
export { ChatReplyWide };
