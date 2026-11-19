import type { DefineComponent } from 'vue';

export interface ChatPlusCircleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleSlant: DefineComponent<ChatPlusCircleSlantProps>;

export default ChatPlusCircleSlant;
export { ChatPlusCircleSlant };
