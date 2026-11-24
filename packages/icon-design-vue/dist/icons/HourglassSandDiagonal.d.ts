import type { DefineComponent } from 'vue';

export interface HourglassSandDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSandDiagonal: DefineComponent<HourglassSandDiagonalProps>;

export default HourglassSandDiagonal;
export { HourglassSandDiagonal };
