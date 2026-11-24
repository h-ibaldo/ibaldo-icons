import type { DefineComponent } from 'vue';

export interface PhoneCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneCircle: DefineComponent<PhoneCircleProps>;

export default PhoneCircle;
export { PhoneCircle };
