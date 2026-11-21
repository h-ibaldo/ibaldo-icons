import type { DefineComponent } from 'vue';

export interface PhoneSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneSharp: DefineComponent<PhoneSharpProps>;

export default PhoneSharp;
export { PhoneSharp };
