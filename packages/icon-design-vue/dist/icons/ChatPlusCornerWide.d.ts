import type { DefineComponent } from 'vue';

export interface ChatPlusCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerWide: DefineComponent<ChatPlusCornerWideProps>;

export default ChatPlusCornerWide;
export { ChatPlusCornerWide };
