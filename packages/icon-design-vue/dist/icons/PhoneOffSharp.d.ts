import type { DefineComponent } from 'vue';

export interface PhoneOffSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneOffSharp: DefineComponent<PhoneOffSharpProps>;

export default PhoneOffSharp;
export { PhoneOffSharp };
