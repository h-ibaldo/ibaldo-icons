import type { DefineComponent } from 'vue';

export interface CheckCircleCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleCompact: DefineComponent<CheckCircleCompactProps>;

export default CheckCircleCompact;
export { CheckCircleCompact };
