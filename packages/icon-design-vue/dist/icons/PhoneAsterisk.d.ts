import type { DefineComponent } from 'vue';

export interface PhoneAsteriskProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneAsterisk: DefineComponent<PhoneAsteriskProps>;

export default PhoneAsterisk;
export { PhoneAsterisk };
