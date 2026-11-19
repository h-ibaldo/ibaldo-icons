import type { DefineComponent } from 'vue';

export interface ChatSearchBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSearchBoxy: DefineComponent<ChatSearchBoxyProps>;

export default ChatSearchBoxy;
export { ChatSearchBoxy };
