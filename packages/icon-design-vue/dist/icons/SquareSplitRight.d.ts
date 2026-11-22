import type { DefineComponent } from 'vue';

export interface SquareSplitRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareSplitRight: DefineComponent<SquareSplitRightProps>;

export default SquareSplitRight;
export { SquareSplitRight };
