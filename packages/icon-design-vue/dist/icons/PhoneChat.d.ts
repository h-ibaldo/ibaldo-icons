import type { DefineComponent } from 'vue';

export interface PhoneChatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneChat: DefineComponent<PhoneChatProps>;

export default PhoneChat;
export { PhoneChat };
