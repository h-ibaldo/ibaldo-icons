import type { DefineComponent } from 'vue';

export interface ChatPlusCircleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleWide: DefineComponent<ChatPlusCircleWideProps>;

export default ChatPlusCircleWide;
export { ChatPlusCircleWide };
