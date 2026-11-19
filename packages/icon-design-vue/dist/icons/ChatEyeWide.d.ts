import type { DefineComponent } from 'vue';

export interface ChatEyeWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEyeWide: DefineComponent<ChatEyeWideProps>;

export default ChatEyeWide;
export { ChatEyeWide };
