import type { DefineComponent } from 'vue';

export interface ChatXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXWide: DefineComponent<ChatXWideProps>;

export default ChatXWide;
export { ChatXWide };
