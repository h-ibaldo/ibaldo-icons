import type { DefineComponent } from 'vue';

export interface PhoneRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneRays: DefineComponent<PhoneRaysProps>;

export default PhoneRays;
export { PhoneRays };
