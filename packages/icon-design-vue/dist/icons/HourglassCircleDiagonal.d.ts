import type { DefineComponent } from 'vue';

export interface HourglassCircleDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassCircleDiagonal: DefineComponent<HourglassCircleDiagonalProps>;

export default HourglassCircleDiagonal;
export { HourglassCircleDiagonal };
