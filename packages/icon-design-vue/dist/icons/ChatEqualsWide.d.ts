import type { DefineComponent } from 'vue';

export interface ChatEqualsWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEqualsWide: DefineComponent<ChatEqualsWideProps>;

export default ChatEqualsWide;
export { ChatEqualsWide };
