import type { DefineComponent } from 'vue';

export interface ChatStarCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerBoxy: DefineComponent<ChatStarCornerBoxyProps>;

export default ChatStarCornerBoxy;
export { ChatStarCornerBoxy };
