import type { DefineComponent } from 'vue';

export interface PhoneRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneRing: DefineComponent<PhoneRingProps>;

export default PhoneRing;
export { PhoneRing };
