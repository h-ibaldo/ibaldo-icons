import type { DefineComponent } from 'vue';

export interface ChatPlusCirclePointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCirclePointed: DefineComponent<ChatPlusCirclePointedProps>;

export default ChatPlusCirclePointed;
export { ChatPlusCirclePointed };
