import type { DefineComponent } from 'vue';

export interface HourglassStandSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassStandSquare: DefineComponent<HourglassStandSquareProps>;

export default HourglassStandSquare;
export { HourglassStandSquare };
