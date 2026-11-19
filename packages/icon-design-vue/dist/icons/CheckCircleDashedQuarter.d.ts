import type { DefineComponent } from 'vue';

export interface CheckCircleDashedQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedQuarter: DefineComponent<CheckCircleDashedQuarterProps>;

export default CheckCircleDashedQuarter;
export { CheckCircleDashedQuarter };
