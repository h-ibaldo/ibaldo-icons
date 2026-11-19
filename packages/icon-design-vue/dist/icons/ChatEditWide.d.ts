import type { DefineComponent } from 'vue';

export interface ChatEditWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatEditWide: DefineComponent<ChatEditWideProps>;

export default ChatEditWide;
export { ChatEditWide };
