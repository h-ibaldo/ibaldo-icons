import type { DefineComponent } from 'vue';

export interface ChatInfoBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatInfoBoxy: DefineComponent<ChatInfoBoxyProps>;

export default ChatInfoBoxy;
export { ChatInfoBoxy };
