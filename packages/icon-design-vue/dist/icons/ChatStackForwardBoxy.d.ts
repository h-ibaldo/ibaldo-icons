import type { DefineComponent } from 'vue';

export interface ChatStackForwardBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardBoxy: DefineComponent<ChatStackForwardBoxyProps>;

export default ChatStackForwardBoxy;
export { ChatStackForwardBoxy };
