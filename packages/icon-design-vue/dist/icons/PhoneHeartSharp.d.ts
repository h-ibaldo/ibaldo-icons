import type { DefineComponent } from 'vue';

export interface PhoneHeartSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneHeartSharp: DefineComponent<PhoneHeartSharpProps>;

export default PhoneHeartSharp;
export { PhoneHeartSharp };
