import type { DefineComponent } from 'vue';

export interface PhonePlusOneSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhonePlusOneSharp: DefineComponent<PhonePlusOneSharpProps>;

export default PhonePlusOneSharp;
export { PhonePlusOneSharp };
