import type { DefineComponent } from 'vue';

export interface ChatStackImageBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackImageBoxy: DefineComponent<ChatStackImageBoxyProps>;

export default ChatStackImageBoxy;
export { ChatStackImageBoxy };
