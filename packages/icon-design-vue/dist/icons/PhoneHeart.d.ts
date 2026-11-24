import type { DefineComponent } from 'vue';

export interface PhoneHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneHeart: DefineComponent<PhoneHeartProps>;

export default PhoneHeart;
export { PhoneHeart };
