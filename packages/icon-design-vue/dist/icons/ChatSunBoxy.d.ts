import type { DefineComponent } from 'vue';

export interface ChatSunBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatSunBoxy: DefineComponent<ChatSunBoxyProps>;

export default ChatSunBoxy;
export { ChatSunBoxy };
