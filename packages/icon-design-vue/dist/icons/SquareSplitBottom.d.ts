import type { DefineComponent } from 'vue';

export interface SquareSplitBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareSplitBottom: DefineComponent<SquareSplitBottomProps>;

export default SquareSplitBottom;
export { SquareSplitBottom };
