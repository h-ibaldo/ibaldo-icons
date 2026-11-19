import type { DefineComponent } from 'vue';

export interface ChatCheckCircleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleBoxy: DefineComponent<ChatCheckCircleBoxyProps>;

export default ChatCheckCircleBoxy;
export { ChatCheckCircleBoxy };
