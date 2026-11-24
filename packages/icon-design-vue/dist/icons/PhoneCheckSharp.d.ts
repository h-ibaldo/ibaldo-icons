import type { DefineComponent } from 'vue';

export interface PhoneCheckSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneCheckSharp: DefineComponent<PhoneCheckSharpProps>;

export default PhoneCheckSharp;
export { PhoneCheckSharp };
