import type { DefineComponent } from 'vue';

export interface ChatMinusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusWide: DefineComponent<ChatMinusWideProps>;

export default ChatMinusWide;
export { ChatMinusWide };
