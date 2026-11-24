import type { DefineComponent } from 'vue';

export interface SparkleThreeLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparkleThreeLarge: DefineComponent<SparkleThreeLargeProps>;

export default SparkleThreeLarge;
export { SparkleThreeLarge };
