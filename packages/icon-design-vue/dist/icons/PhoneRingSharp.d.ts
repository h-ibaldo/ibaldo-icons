import type { DefineComponent } from 'vue';

export interface PhoneRingSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneRingSharp: DefineComponent<PhoneRingSharpProps>;

export default PhoneRingSharp;
export { PhoneRingSharp };
