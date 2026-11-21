import type { DefineComponent } from 'vue';

export interface PhoneHashSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneHashSharp: DefineComponent<PhoneHashSharpProps>;

export default PhoneHashSharp;
export { PhoneHashSharp };
