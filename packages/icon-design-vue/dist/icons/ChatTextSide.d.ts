import type { DefineComponent } from 'vue';

export interface ChatTextSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextSide: DefineComponent<ChatTextSideProps>;

export default ChatTextSide;
export { ChatTextSide };
