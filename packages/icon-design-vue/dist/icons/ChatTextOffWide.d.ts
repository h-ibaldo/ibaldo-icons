import type { DefineComponent } from 'vue';

export interface ChatTextOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextOffWide: DefineComponent<ChatTextOffWideProps>;

export default ChatTextOffWide;
export { ChatTextOffWide };
