import type { DefineComponent } from 'vue';

export interface ChatTriangleBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTriangleBroken: DefineComponent<ChatTriangleBrokenProps>;

export default ChatTriangleBroken;
export { ChatTriangleBroken };
