import type { DefineComponent } from 'vue';

export interface ChatCheckCircleSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleSlant: DefineComponent<ChatCheckCircleSlantProps>;

export default ChatCheckCircleSlant;
export { ChatCheckCircleSlant };
