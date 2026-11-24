import type { DefineComponent } from 'vue';

export interface WheelchairSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WheelchairSquare: DefineComponent<WheelchairSquareProps>;

export default WheelchairSquare;
export { WheelchairSquare };
