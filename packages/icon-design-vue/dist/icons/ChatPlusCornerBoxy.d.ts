import type { DefineComponent } from 'vue';

export interface ChatPlusCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerBoxy: DefineComponent<ChatPlusCornerBoxyProps>;

export default ChatPlusCornerBoxy;
export { ChatPlusCornerBoxy };
