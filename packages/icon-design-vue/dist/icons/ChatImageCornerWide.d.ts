import type { DefineComponent } from 'vue';

export interface ChatImageCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatImageCornerWide: DefineComponent<ChatImageCornerWideProps>;

export default ChatImageCornerWide;
export { ChatImageCornerWide };
