import type { DefineComponent } from 'vue';

export interface ChatXCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXCornerBoxy: DefineComponent<ChatXCornerBoxyProps>;

export default ChatXCornerBoxy;
export { ChatXCornerBoxy };
