import type { DefineComponent } from 'vue';

export interface ChatStackLaughBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackLaughBoxy: DefineComponent<ChatStackLaughBoxyProps>;

export default ChatStackLaughBoxy;
export { ChatStackLaughBoxy };
