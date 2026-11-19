import type { DefineComponent } from 'vue';

export interface ChatTextRaysSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextRaysSide: DefineComponent<ChatTextRaysSideProps>;

export default ChatTextRaysSide;
export { ChatTextRaysSide };
