import type { DefineComponent } from 'vue';

export interface ChatXCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCircleBoxy: DefineComponent<ChatXCircleBoxyProps>;

export default ChatXCircleBoxy;
export { ChatXCircleBoxy };
