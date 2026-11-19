import type { DefineComponent } from 'vue';

export interface ChatSunWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunWide: DefineComponent<ChatSunWideProps>;

export default ChatSunWide;
export { ChatSunWide };
