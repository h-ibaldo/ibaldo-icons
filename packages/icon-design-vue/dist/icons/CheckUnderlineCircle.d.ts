import type { DefineComponent } from 'vue';

export interface CheckUnderlineCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckUnderlineCircle: DefineComponent<CheckUnderlineCircleProps>;

export default CheckUnderlineCircle;
export { CheckUnderlineCircle };
