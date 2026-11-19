import type { DefineComponent } from 'vue';

export interface ChatStackXDoubleLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleLayered: DefineComponent<ChatStackXDoubleLayeredProps>;

export default ChatStackXDoubleLayered;
export { ChatStackXDoubleLayered };
