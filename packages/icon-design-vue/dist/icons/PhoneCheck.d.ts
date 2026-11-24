import type { DefineComponent } from 'vue';

export interface PhoneCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneCheck: DefineComponent<PhoneCheckProps>;

export default PhoneCheck;
export { PhoneCheck };
