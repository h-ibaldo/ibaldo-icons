import type { DefineComponent } from 'vue';

export interface SparklePointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparklePointed: DefineComponent<SparklePointedProps>;

export default SparklePointed;
export { SparklePointed };
