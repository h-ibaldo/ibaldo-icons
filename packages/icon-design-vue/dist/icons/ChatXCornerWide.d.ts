import type { DefineComponent } from 'vue';

export interface ChatXCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerWide: DefineComponent<ChatXCornerWideProps>;

export default ChatXCornerWide;
export { ChatXCornerWide };
