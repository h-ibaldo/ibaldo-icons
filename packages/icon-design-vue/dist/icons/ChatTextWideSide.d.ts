import type { DefineComponent } from 'vue';

export interface ChatTextWideSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextWideSide: DefineComponent<ChatTextWideSideProps>;

export default ChatTextWideSide;
export { ChatTextWideSide };
