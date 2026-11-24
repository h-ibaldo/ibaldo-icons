import type { DefineComponent } from 'vue';

export interface ChatCheckCornerBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerBoxy: DefineComponent<ChatCheckCornerBoxyProps>;

export default ChatCheckCornerBoxy;
export { ChatCheckCornerBoxy };
