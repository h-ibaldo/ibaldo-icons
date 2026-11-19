import type { DefineComponent } from 'vue';

export interface ChatHappyWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHappyWide: DefineComponent<ChatHappyWideProps>;

export default ChatHappyWide;
export { ChatHappyWide };
