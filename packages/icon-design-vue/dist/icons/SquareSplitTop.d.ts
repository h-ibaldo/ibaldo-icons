import type { DefineComponent } from 'vue';

export interface SquareSplitTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareSplitTop: DefineComponent<SquareSplitTopProps>;

export default SquareSplitTop;
export { SquareSplitTop };
