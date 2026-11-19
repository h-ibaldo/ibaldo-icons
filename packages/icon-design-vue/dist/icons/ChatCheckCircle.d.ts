import type { DefineComponent } from 'vue';

export interface ChatCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircle: DefineComponent<ChatCheckCircleProps>;

export default ChatCheckCircle;
export { ChatCheckCircle };
