import type { DefineComponent } from 'vue';

export interface ChatWarningWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatWarningWide: DefineComponent<ChatWarningWideProps>;

export default ChatWarningWide;
export { ChatWarningWide };
