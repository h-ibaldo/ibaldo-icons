import type { DefineComponent } from 'vue';

export interface ChatOneCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleWide: DefineComponent<ChatOneCircleWideProps>;

export default ChatOneCircleWide;
export { ChatOneCircleWide };
