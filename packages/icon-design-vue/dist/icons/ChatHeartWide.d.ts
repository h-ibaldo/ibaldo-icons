import type { DefineComponent } from 'vue';

export interface ChatHeartWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatHeartWide: DefineComponent<ChatHeartWideProps>;

export default ChatHeartWide;
export { ChatHeartWide };
