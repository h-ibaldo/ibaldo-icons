import type { DefineComponent } from 'vue';

export interface HourglassDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassDiagonal: DefineComponent<HourglassDiagonalProps>;

export default HourglassDiagonal;
export { HourglassDiagonal };
