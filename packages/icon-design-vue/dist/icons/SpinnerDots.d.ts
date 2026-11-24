import type { DefineComponent } from 'vue';

export interface SpinnerDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerDots: DefineComponent<SpinnerDotsProps>;

export default SpinnerDots;
export { SpinnerDots };
