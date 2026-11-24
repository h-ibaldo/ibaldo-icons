import type { DefineComponent } from 'vue';

export interface CheckDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckDouble: DefineComponent<CheckDoubleProps>;

export default CheckDouble;
export { CheckDouble };
