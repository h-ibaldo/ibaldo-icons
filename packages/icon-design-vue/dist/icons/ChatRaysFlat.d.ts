import type { DefineComponent } from 'vue';

export interface ChatRaysFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatRaysFlat: DefineComponent<ChatRaysFlatProps>;

export default ChatRaysFlat;
export { ChatRaysFlat };
