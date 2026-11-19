import type { DefineComponent } from 'vue';

export interface ChatOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOffWide: DefineComponent<ChatOffWideProps>;

export default ChatOffWide;
export { ChatOffWide };
