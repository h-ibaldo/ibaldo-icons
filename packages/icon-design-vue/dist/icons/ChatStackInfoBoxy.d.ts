import type { DefineComponent } from 'vue';

export interface ChatStackInfoBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackInfoBoxy: DefineComponent<ChatStackInfoBoxyProps>;

export default ChatStackInfoBoxy;
export { ChatStackInfoBoxy };
