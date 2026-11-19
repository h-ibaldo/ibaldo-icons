import type { DefineComponent } from 'vue';

export interface ChatXCircleTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleTall: DefineComponent<ChatXCircleTallProps>;

export default ChatXCircleTall;
export { ChatXCircleTall };
