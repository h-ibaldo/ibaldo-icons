import type { DefineComponent } from 'vue';

export interface ChatMinusCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleBoxy: DefineComponent<ChatMinusCircleBoxyProps>;

export default ChatMinusCircleBoxy;
export { ChatMinusCircleBoxy };
