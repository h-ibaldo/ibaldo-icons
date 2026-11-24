import type { DefineComponent } from 'vue';

export interface HourglassSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSquare: DefineComponent<HourglassSquareProps>;

export default HourglassSquare;
export { HourglassSquare };
