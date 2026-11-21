import type { DefineComponent } from 'vue';

export interface PhoneListSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneListSharp: DefineComponent<PhoneListSharpProps>;

export default PhoneListSharp;
export { PhoneListSharp };
