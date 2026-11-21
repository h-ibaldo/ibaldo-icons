import type { DefineComponent } from 'vue';

export interface PhoneXSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneXSharp: DefineComponent<PhoneXSharpProps>;

export default PhoneXSharp;
export { PhoneXSharp };
