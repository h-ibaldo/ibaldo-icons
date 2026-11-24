import type { DefineComponent } from 'vue';

export interface ChatVideoWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatVideoWide: DefineComponent<ChatVideoWideProps>;

export default ChatVideoWide;
export { ChatVideoWide };
