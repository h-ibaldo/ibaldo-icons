import type { DefineComponent } from 'vue';

export interface ChatBanCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatBanCornerWide: DefineComponent<ChatBanCornerWideProps>;

export default ChatBanCornerWide;
export { ChatBanCornerWide };
