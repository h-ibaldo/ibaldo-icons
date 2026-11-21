import type { DefineComponent } from 'vue';

export interface PhoneOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneOff: DefineComponent<PhoneOffProps>;

export default PhoneOff;
export { PhoneOff };
