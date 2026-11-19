import type { DefineComponent } from 'vue';

export interface ChatLetterTWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLetterTWide: DefineComponent<ChatLetterTWideProps>;

export default ChatLetterTWide;
export { ChatLetterTWide };
