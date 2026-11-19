import type { DefineComponent } from 'vue';

export interface ChatXDoubleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleWide: DefineComponent<ChatXDoubleWideProps>;

export default ChatXDoubleWide;
export { ChatXDoubleWide };
