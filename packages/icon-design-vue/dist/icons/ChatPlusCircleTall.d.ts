import type { DefineComponent } from 'vue';

export interface ChatPlusCircleTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleTall: DefineComponent<ChatPlusCircleTallProps>;

export default ChatPlusCircleTall;
export { ChatPlusCircleTall };
