import type { DefineComponent } from 'vue';

export interface PhoneBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneBan: DefineComponent<PhoneBanProps>;

export default PhoneBan;
export { PhoneBan };
