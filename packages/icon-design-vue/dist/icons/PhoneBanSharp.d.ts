import type { DefineComponent } from 'vue';

export interface PhoneBanSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneBanSharp: DefineComponent<PhoneBanSharpProps>;

export default PhoneBanSharp;
export { PhoneBanSharp };
