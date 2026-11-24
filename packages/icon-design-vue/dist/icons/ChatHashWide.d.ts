import type { DefineComponent } from 'vue';

export interface ChatHashWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHashWide: DefineComponent<ChatHashWideProps>;

export default ChatHashWide;
export { ChatHashWide };
