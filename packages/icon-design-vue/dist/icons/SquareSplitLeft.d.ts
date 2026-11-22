import type { DefineComponent } from 'vue';

export interface SquareSplitLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareSplitLeft: DefineComponent<SquareSplitLeftProps>;

export default SquareSplitLeft;
export { SquareSplitLeft };
