import type { DefineComponent } from 'vue';

export interface ChatXDoubleBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleBoxy: DefineComponent<ChatXDoubleBoxyProps>;

export default ChatXDoubleBoxy;
export { ChatXDoubleBoxy };
