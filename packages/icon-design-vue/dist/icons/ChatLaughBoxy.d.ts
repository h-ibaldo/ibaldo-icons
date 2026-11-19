import type { DefineComponent } from 'vue';

export interface ChatLaughBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatLaughBoxy: DefineComponent<ChatLaughBoxyProps>;

export default ChatLaughBoxy;
export { ChatLaughBoxy };
