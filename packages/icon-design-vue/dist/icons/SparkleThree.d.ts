import type { DefineComponent } from 'vue';

export interface SparkleThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparkleThree: DefineComponent<SparkleThreeProps>;

export default SparkleThree;
export { SparkleThree };
