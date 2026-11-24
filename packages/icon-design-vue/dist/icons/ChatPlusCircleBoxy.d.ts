import type { DefineComponent } from 'vue';

export interface ChatPlusCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleBoxy: DefineComponent<ChatPlusCircleBoxyProps>;

export default ChatPlusCircleBoxy;
export { ChatPlusCircleBoxy };
