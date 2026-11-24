import type { DefineComponent } from 'vue';

export interface CheckOverlineCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckOverlineCircle: DefineComponent<CheckOverlineCircleProps>;

export default CheckOverlineCircle;
export { CheckOverlineCircle };
