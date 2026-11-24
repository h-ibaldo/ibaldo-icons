import type { DefineComponent } from 'vue';

export interface ApproximateSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ApproximateSquare: DefineComponent<ApproximateSquareProps>;

export default ApproximateSquare;
export { ApproximateSquare };
