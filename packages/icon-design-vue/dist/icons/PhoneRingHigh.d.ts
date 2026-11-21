import type { DefineComponent } from 'vue';

export interface PhoneRingHighProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneRingHigh: DefineComponent<PhoneRingHighProps>;

export default PhoneRingHigh;
export { PhoneRingHigh };
