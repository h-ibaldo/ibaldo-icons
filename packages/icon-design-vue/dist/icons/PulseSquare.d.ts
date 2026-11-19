import type { DefineComponent } from 'vue';

export interface PulseSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PulseSquare: DefineComponent<PulseSquareProps>;

export default PulseSquare;
export { PulseSquare };
