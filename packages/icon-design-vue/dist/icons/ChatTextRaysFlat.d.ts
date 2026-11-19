import type { DefineComponent } from 'vue';

export interface ChatTextRaysFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatTextRaysFlat: DefineComponent<ChatTextRaysFlatProps>;

export default ChatTextRaysFlat;
export { ChatTextRaysFlat };
