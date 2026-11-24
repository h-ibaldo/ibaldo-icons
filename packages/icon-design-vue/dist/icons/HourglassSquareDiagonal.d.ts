import type { DefineComponent } from 'vue';

export interface HourglassSquareDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSquareDiagonal: DefineComponent<HourglassSquareDiagonalProps>;

export default HourglassSquareDiagonal;
export { HourglassSquareDiagonal };
