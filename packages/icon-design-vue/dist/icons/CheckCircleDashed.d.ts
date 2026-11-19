import type { DefineComponent } from 'vue';

export interface CheckCircleDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashed: DefineComponent<CheckCircleDashedProps>;

export default CheckCircleDashed;
export { CheckCircleDashed };
