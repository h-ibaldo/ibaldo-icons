import type { DefineComponent } from 'vue';

export interface ChatStackSunBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackSunBoxy: DefineComponent<ChatStackSunBoxyProps>;

export default ChatStackSunBoxy;
export { ChatStackSunBoxy };
