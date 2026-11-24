import type { DefineComponent } from 'vue';

export interface ChatAlertWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatAlertWide: DefineComponent<ChatAlertWideProps>;

export default ChatAlertWide;
export { ChatAlertWide };
