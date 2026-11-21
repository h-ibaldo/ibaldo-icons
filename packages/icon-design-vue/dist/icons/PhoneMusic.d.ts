import type { DefineComponent } from 'vue';

export interface PhoneMusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneMusic: DefineComponent<PhoneMusicProps>;

export default PhoneMusic;
export { PhoneMusic };
