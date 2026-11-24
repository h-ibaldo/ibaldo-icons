import type { DefineComponent } from 'vue';

export interface ChatOneCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleBoxy: DefineComponent<ChatOneCircleBoxyProps>;

export default ChatOneCircleBoxy;
export { ChatOneCircleBoxy };
