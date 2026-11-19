import type { DefineComponent } from 'vue';

export interface ChatCheckSlantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckSlant: DefineComponent<ChatCheckSlantProps>;

export default ChatCheckSlant;
export { ChatCheckSlant };
