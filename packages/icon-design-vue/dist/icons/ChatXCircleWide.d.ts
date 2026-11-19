import type { DefineComponent } from 'vue';

export interface ChatXCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleWide: DefineComponent<ChatXCircleWideProps>;

export default ChatXCircleWide;
export { ChatXCircleWide };
