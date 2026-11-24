import type { DefineComponent } from 'vue';

export interface ChatRaysSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatRaysSide: DefineComponent<ChatRaysSideProps>;

export default ChatRaysSide;
export { ChatRaysSide };
