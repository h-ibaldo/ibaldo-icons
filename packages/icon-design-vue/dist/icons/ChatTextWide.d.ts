import type { DefineComponent } from 'vue';

export interface ChatTextWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextWide: DefineComponent<ChatTextWideProps>;

export default ChatTextWide;
export { ChatTextWide };
