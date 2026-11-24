import type { DefineComponent } from 'vue';

export interface ChatDotsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsWide: DefineComponent<ChatDotsWideProps>;

export default ChatDotsWide;
export { ChatDotsWide };
