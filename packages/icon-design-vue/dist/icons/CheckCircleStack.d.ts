import type { DefineComponent } from 'vue';

export interface CheckCircleStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleStack: DefineComponent<CheckCircleStackProps>;

export default CheckCircleStack;
export { CheckCircleStack };
