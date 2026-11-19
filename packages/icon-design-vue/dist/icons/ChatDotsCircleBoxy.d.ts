import type { DefineComponent } from 'vue';

export interface ChatDotsCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleBoxy: DefineComponent<ChatDotsCircleBoxyProps>;

export default ChatDotsCircleBoxy;
export { ChatDotsCircleBoxy };
