import type { DefineComponent } from 'vue';

export interface ChatPlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusWide: DefineComponent<ChatPlusWideProps>;

export default ChatPlusWide;
export { ChatPlusWide };
