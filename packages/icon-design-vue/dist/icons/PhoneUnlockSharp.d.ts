import type { DefineComponent } from 'vue';

export interface PhoneUnlockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneUnlockSharp: DefineComponent<PhoneUnlockSharpProps>;

export default PhoneUnlockSharp;
export { PhoneUnlockSharp };
