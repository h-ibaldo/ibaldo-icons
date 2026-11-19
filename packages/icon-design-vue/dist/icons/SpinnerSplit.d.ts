import type { DefineComponent } from 'vue';

export interface SpinnerSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerSplit: DefineComponent<SpinnerSplitProps>;

export default SpinnerSplit;
export { SpinnerSplit };
