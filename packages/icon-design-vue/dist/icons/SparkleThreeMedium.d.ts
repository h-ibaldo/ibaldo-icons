import type { DefineComponent } from 'vue';

export interface SparkleThreeMediumProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparkleThreeMedium: DefineComponent<SparkleThreeMediumProps>;

export default SparkleThreeMedium;
export { SparkleThreeMedium };
