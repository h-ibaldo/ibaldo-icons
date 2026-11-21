import type { DefineComponent } from 'vue';

export interface PhoneClockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneClockSharp: DefineComponent<PhoneClockSharpProps>;

export default PhoneClockSharp;
export { PhoneClockSharp };
