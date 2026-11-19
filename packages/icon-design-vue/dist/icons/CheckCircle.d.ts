import type { DefineComponent } from 'vue';

export interface CheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircle: DefineComponent<CheckCircleProps>;

export default CheckCircle;
export { CheckCircle };
