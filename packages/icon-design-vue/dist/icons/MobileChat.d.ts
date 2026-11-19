import type { DefineComponent } from 'vue';

export interface MobileChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileChat: DefineComponent<MobileChatProps>;

export default MobileChat;
export { MobileChat };
