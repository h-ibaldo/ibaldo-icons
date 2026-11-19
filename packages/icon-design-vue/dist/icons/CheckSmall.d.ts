import type { DefineComponent } from 'vue';

export interface CheckSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSmall: DefineComponent<CheckSmallProps>;

export default CheckSmall;
export { CheckSmall };
