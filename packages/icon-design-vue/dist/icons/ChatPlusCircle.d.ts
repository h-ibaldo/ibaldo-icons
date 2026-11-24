import type { DefineComponent } from 'vue';

export interface ChatPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircle: DefineComponent<ChatPlusCircleProps>;

export default ChatPlusCircle;
export { ChatPlusCircle };
