import type { DefineComponent } from 'vue';

export interface PhoneClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneClock: DefineComponent<PhoneClockProps>;

export default PhoneClock;
export { PhoneClock };
