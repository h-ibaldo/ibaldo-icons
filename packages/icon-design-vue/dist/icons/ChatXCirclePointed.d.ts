import type { DefineComponent } from 'vue';

export interface ChatXCirclePointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCirclePointed: DefineComponent<ChatXCirclePointedProps>;

export default ChatXCirclePointed;
export { ChatXCirclePointed };
