import type { DefineComponent } from 'vue';

export interface ChatUnderlineWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineWide: DefineComponent<ChatUnderlineWideProps>;

export default ChatUnderlineWide;
export { ChatUnderlineWide };
