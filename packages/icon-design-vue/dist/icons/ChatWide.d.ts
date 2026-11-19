import type { DefineComponent } from 'vue';

export interface ChatWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWide: DefineComponent<ChatWideProps>;

export default ChatWide;
export { ChatWide };
