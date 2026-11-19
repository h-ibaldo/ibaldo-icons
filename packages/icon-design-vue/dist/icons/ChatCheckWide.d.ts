import type { DefineComponent } from 'vue';

export interface ChatCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckWide: DefineComponent<ChatCheckWideProps>;

export default ChatCheckWide;
export { ChatCheckWide };
