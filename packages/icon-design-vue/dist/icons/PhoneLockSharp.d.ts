import type { DefineComponent } from 'vue';

export interface PhoneLockSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneLockSharp: DefineComponent<PhoneLockSharpProps>;

export default PhoneLockSharp;
export { PhoneLockSharp };
