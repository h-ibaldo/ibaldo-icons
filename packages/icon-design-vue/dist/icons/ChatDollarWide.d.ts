import type { DefineComponent } from 'vue';

export interface ChatDollarWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDollarWide: DefineComponent<ChatDollarWideProps>;

export default ChatDollarWide;
export { ChatDollarWide };
