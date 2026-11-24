import type { DefineComponent } from 'vue';

export interface ChatStackHashFacingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChatStackHashFacing: DefineComponent<ChatStackHashFacingProps>;

export default ChatStackHashFacing;
export { ChatStackHashFacing };
