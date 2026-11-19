import type { DefineComponent } from 'vue';

export interface ChatStackBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackBoxy: DefineComponent<ChatStackBoxyProps>;

export default ChatStackBoxy;
export { ChatStackBoxy };
