import type { DefineComponent } from 'vue';

export interface ChatStarCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerWide: DefineComponent<ChatStarCornerWideProps>;

export default ChatStarCornerWide;
export { ChatStarCornerWide };
