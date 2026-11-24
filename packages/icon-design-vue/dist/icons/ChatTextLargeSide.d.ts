import type { DefineComponent } from 'vue';

export interface ChatTextLargeSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextLargeSide: DefineComponent<ChatTextLargeSideProps>;

export default ChatTextLargeSide;
export { ChatTextLargeSide };
