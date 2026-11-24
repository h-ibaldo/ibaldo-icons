import type { DefineComponent } from 'vue';

export interface ChatStackOffBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackOffBoxy: DefineComponent<ChatStackOffBoxyProps>;

export default ChatStackOffBoxy;
export { ChatStackOffBoxy };
