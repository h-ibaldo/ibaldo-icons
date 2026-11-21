import type { DefineComponent } from 'vue';

export interface PhoneRaysSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneRaysSharp: DefineComponent<PhoneRaysSharpProps>;

export default PhoneRaysSharp;
export { PhoneRaysSharp };
