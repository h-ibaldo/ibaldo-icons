import type { DefineComponent } from 'vue';

export interface PhoneMusicSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneMusicSharp: DefineComponent<PhoneMusicSharpProps>;

export default PhoneMusicSharp;
export { PhoneMusicSharp };
