import type { DefineComponent } from 'vue';

export interface PhoneUnlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneUnlock: DefineComponent<PhoneUnlockProps>;

export default PhoneUnlock;
export { PhoneUnlock };
