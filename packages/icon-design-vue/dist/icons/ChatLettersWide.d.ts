import type { DefineComponent } from 'vue';

export interface ChatLettersWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLettersWide: DefineComponent<ChatLettersWideProps>;

export default ChatLettersWide;
export { ChatLettersWide };
