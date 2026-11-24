import type { DefineComponent } from 'vue';

export interface ApproximateCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ApproximateCircle: DefineComponent<ApproximateCircleProps>;

export default ApproximateCircle;
export { ApproximateCircle };
