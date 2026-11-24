import type { DefineComponent } from 'vue';

export interface ChatLaughWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughWide: DefineComponent<ChatLaughWideProps>;

export default ChatLaughWide;
export { ChatLaughWide };
