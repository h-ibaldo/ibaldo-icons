import type { DefineComponent } from 'vue';

export interface ChatForwardWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatForwardWide: DefineComponent<ChatForwardWideProps>;

export default ChatForwardWide;
export { ChatForwardWide };
