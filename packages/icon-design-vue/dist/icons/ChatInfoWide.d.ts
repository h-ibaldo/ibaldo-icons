import type { DefineComponent } from 'vue';

export interface ChatInfoWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoWide: DefineComponent<ChatInfoWideProps>;

export default ChatInfoWide;
export { ChatInfoWide };
