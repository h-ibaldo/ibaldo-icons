import type { DefineComponent } from 'vue';

export interface CheckboxCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckboxCircle: DefineComponent<CheckboxCircleProps>;

export default CheckboxCircle;
export { CheckboxCircle };
