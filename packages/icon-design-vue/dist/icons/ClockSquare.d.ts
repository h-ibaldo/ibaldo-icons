import type { DefineComponent } from 'vue';

export interface ClockSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSquare: DefineComponent<ClockSquareProps>;

export default ClockSquare;
export { ClockSquare };
