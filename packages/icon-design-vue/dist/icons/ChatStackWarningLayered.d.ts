import type { DefineComponent } from 'vue';

export interface ChatStackWarningLayeredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackWarningLayered: DefineComponent<ChatStackWarningLayeredProps>;

export default ChatStackWarningLayered;
export { ChatStackWarningLayered };
