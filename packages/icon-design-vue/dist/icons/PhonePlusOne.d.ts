import type { DefineComponent } from 'vue';

export interface PhonePlusOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhonePlusOne: DefineComponent<PhonePlusOneProps>;

export default PhonePlusOne;
export { PhonePlusOne };
