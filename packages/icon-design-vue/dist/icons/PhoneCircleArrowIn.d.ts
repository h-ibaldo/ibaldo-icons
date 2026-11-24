import type { DefineComponent } from 'vue';

export interface PhoneCircleArrowInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneCircleArrowIn: DefineComponent<PhoneCircleArrowInProps>;

export default PhoneCircleArrowIn;
export { PhoneCircleArrowIn };
